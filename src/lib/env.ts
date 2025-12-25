// Environment variables validation
export function validateEnvironment() {
  const required = {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    COMPANY_EMAIL: process.env.COMPANY_EMAIL,
  };

  const missing = Object.entries(required)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(required.EMAIL_USER!)) {
    throw new Error('EMAIL_USER must be a valid email address');
  }
  
  if (!emailRegex.test(required.COMPANY_EMAIL!)) {
    throw new Error('COMPANY_EMAIL must be a valid email address');
  }

  return required;
}

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // Max 5 requests per window
};

// Input validation constants
export const VALIDATION_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 100 },
  phone: { max: 20 },
  address: { max: 200 },
  purpose: { max: 100 },
  message: { min: 10, max: 2000 },
};

