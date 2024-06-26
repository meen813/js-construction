import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export async function POST(req: NextRequest) {
  const { name, email, phone, address, purpose, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.COMPANY_EMAIL, //company email
    subject: 'New Inquiry from Contact Form',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      Project: ${purpose}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Unknown error' }, { status: 500 });
    }
  }
}
