// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Input validation and sanitization
function validateInput(data: any) {
  const errors: string[] = [];
  
  // Required fields validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  // Sanitize inputs
  const sanitized = {
    name: data.name?.trim().substring(0, 100) || '',
    email: data.email?.trim().toLowerCase().substring(0, 100) || '',
    phone: data.phone?.trim().substring(0, 20) || '',
    address: data.address?.trim().substring(0, 200) || '',
    purpose: data.purpose?.trim().substring(0, 100) || '',
    message: data.message?.trim().substring(0, 2000) || ''
  };
  
  return { errors, sanitized };
}

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes
  
  const key = ip;
  const current = rateLimitStore.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

// Environment variables validation
function validateEnvironment() {
  const required = ['EMAIL_USER', 'EMAIL_PASS', 'COMPANY_EMAIL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    // Validate environment variables
    validateEnvironment();
    
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' }, 
        { status: 429 }
      );
    }
    
    // Parse and validate request body
    const body = await req.json();
    const { errors, sanitized } = validateInput(body);
    
    if (errors.length > 0) {
      return NextResponse.json(
        { message: 'Validation failed', errors }, 
        { status: 400 }
      );
    }
    
    // Create transporter
    // Supports both Gmail and Hotmail/Outlook
    const emailDomain = process.env.EMAIL_USER?.toLowerCase().includes('@gmail.com') ? 'gmail' : 
                       process.env.EMAIL_USER?.toLowerCase().includes('@hotmail.com') || 
                       process.env.EMAIL_USER?.toLowerCase().includes('@outlook.com') ? 'hotmail' : 'gmail';
    
    const transporter = nodemailer.createTransport({
      service: emailDomain,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      replyTo: sanitized.email,
      subject: `New Inquiry from ${sanitized.name} - ${sanitized.purpose}`,
      text: `
New Contact Form Submission:

Name: ${sanitized.name}
Email: ${sanitized.email}
Phone: ${sanitized.phone || 'Not provided'}
Address: ${sanitized.address || 'Not provided'}
Project Type: ${sanitized.purpose}
Message: ${sanitized.message}

---
Submitted at: ${new Date().toISOString()}
IP Address: ${ip}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitized.name}</p>
            <p><strong>Email:</strong> ${sanitized.email}</p>
            <p><strong>Phone:</strong> ${sanitized.phone || 'Not provided'}</p>
            <p><strong>Address:</strong> ${sanitized.address || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${sanitized.purpose}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${sanitized.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Submitted at: ${new Date().toLocaleString()}<br>
            IP Address: ${ip}
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      message: 'Email sent successfully',
      success: true 
    });
    
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' }, 
      { status: 500 }
    );
  }
}

