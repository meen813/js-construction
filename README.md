# Hwang J&S Construction Website

A professional construction company website built with Next.js, featuring project galleries, contact forms, and service information.

## Features

- 🏗️ **Project Portfolio** - Showcase completed construction projects with filtering
- 📧 **Contact Form** - Secure contact form with rate limiting and validation
- 🎨 **Modern Design** - Responsive design with professional aesthetics
- 🔒 **Security** - Comprehensive security measures and input validation
- 📱 **Mobile Responsive** - Optimized for all device sizes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Email Configuration (Required)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
COMPANY_EMAIL=company@example.com

# AWS Configuration (Optional - for S3 image uploads)
AWS_REGION=us-west-1
BUCKET_NAME=your-bucket-name

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables (see above)
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Security Features

### 🔒 **Implemented Security Measures**

- **Input Validation**: Server-side and client-side validation for all form inputs
- **Rate Limiting**: API endpoints protected against spam (5 requests per 15 minutes)
- **Security Headers**: XSS protection, content type sniffing prevention, frame options
- **Email Security**: Sanitized inputs, proper error handling, no sensitive data exposure
- **Environment Validation**: Required environment variables validation on startup

### 🛡️ **Security Headers**

- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts browser features

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── api/            # API routes
│   ├── projects/       # Project pages
│   ├── services/       # Services page
│   └── contact/        # Contact page
├── components/         # React components
├── projects/           # Project data and types
└── lib/               # Utility functions
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables Setup

### Gmail Setup (for contact form)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the app password as `EMAIL_PASS`

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Gmail address for sending emails | `your-email@gmail.com` |
| `EMAIL_PASS` | Gmail app password | `your-16-char-password` |
| `COMPANY_EMAIL` | Company email for receiving inquiries | `info@company.com` |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Hwang J&S Construction.
