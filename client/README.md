# Royal Consultancy Services - Website

This is the official website for Royal Consultancy Services built with React and Vite.

## Email Integration

The contact form is integrated with EmailJS to send inquiries directly to your email. To set this up:

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. Connect your email service provider (Gmail, Outlook, etc.)
3. Create a new email template with the following variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Email subject
   - `message` - Message content
   - `to_email` - Recipient email
4. Update the `.env` file with your EmailJS credentials:
   - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
   - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

## Running the Application

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## React + Vite Template Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
