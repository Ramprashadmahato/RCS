// controllers/contactController.js
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create new contact (public form submission)
exports.createContact = async (req, res) => {
  try {
    const {
      name = 'Anonymous',
      email = 'no-email@rcs.com',
      phone = 'N/A',
      country = 'Unknown',
      preferredBranch = 'General',
      studyDestination = 'General Inquiry',
      subject = 'Website Inquiry',
      message: msg = ''
    } = req.body;

    // Log incoming data for debugging
    console.log('Incoming contact submission:', req.body);

    const contact = await Contact.create({
      name,
      email,
      phone,
      country,
      preferredBranch,
      studyDestination,
      subject: subject || `Website Inquiry`,
      message: msg || `Inquiry from ${name} about ${studyDestination}`
    });
    res.status(201).json(contact);
  } catch (err) {
    console.error('Contact creation error:', err);
    // If it's a Sequelize validation error, provide details
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
      const messages = err.errors.map(e => e.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    res.status(400).json({ error: err.message });
  }
};

// Get all contacts (admin only)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a contact (admin only)
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Reply to contact via email (admin only)
exports.replyToContact = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    // Configure mail transporter (use your SMTP settings)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message
    });

    res.json({ message: 'Reply sent successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};