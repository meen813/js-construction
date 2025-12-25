'use client'
import { useState, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    purpose: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);


  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    if (!formData.purpose) {
      newErrors.purpose = 'Please select a project type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Client-side validation
    if (!validateForm()) {
      setStatus('error');
      // Focus on first error field after state update
      setTimeout(() => {
        if (formRef.current) {
          const firstErrorField = formRef.current.querySelector('[aria-invalid="true"]') as HTMLElement;
          firstErrorField?.focus();
        }
      }, 0);
      return;
    }
    
    setIsSubmitting(true);
    setStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        purpose: '',
        message: '',
      });
      setErrors({});
      // Focus on status message for screen readers
      statusRef.current?.focus();
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ submit: error.message });
        setStatus('error');
      } else {
        setErrors({ submit: 'An unknown error occurred' });
        setStatus('error');
      }
      statusRef.current?.focus();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear errors when user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Request Your Free Quote</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your construction project? Get a personalized quote from our expert team. 
            We&apos;ll respond within 24 hours.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Form Container */}
        <div className="card-gradient p-4 sm:p-6 md:p-8 lg:p-12">
          <form ref={formRef} className="max-w-2xl mx-auto space-y-4 sm:space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Error Summary */}
            {Object.keys(errors).length > 0 && (
              <div 
                role="alert" 
                aria-live="assertive"
                className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6"
              >
                <h3 className="text-sm font-semibold text-red-800 mb-2">Please fix the following errors:</h3>
                <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                  {Object.entries(errors).map(([field, message]) => (
                    <li key={field}>{message}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input 
                  id="name"
                  type="text" 
                  name="name" 
                  required 
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`form-input w-full ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input 
                  id="email"
                  type="email" 
                  name="email" 
                  required 
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`form-input w-full ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Address Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  id="phone"
                  type="tel" 
                  name="phone" 
                  autoComplete="tel"
                  className="form-input w-full" 
                  value={formData.phone} 
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Address
                </label>
                <input 
                  id="address"
                  type="text" 
                  name="address" 
                  autoComplete="street-address"
                  className="form-input w-full" 
                  value={formData.address} 
                  onChange={handleChange}
                  placeholder="123 Main St, City, State"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Type <span className="text-red-500" aria-label="required">*</span>
              </label>
              <select 
                id="purpose"
                name="purpose" 
                required 
                aria-required="true"
                aria-invalid={errors.purpose ? 'true' : 'false'}
                aria-describedby={errors.purpose ? 'purpose-error' : undefined}
                className={`form-select ${errors.purpose ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.purpose} 
                onChange={handleChange}
              >
                <option value="">Select your project type</option>
                <option value="remodeling">New Custom Building</option>
                <option value="maintenance">Home Addition (ADU)</option>
                <option value="addition">Remodel</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </select>
              {errors.purpose && (
                <p id="purpose-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.purpose}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Details <span className="text-red-500" aria-label="required">*</span>
              </label>
              <textarea 
                id="message"
                name="message" 
                required 
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`form-textarea h-32 ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.message} 
                onChange={handleChange}
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
              ></textarea>
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className={`btn-primary text-lg px-12 py-4 min-w-[200px] group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Quote Request</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Status Message */}
            <div
              ref={statusRef}
              role="status"
              aria-live="polite"
              aria-atomic="true"
              tabIndex={-1}
              className={`text-center p-4 rounded-lg ${
                status === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : status === 'error' || status.startsWith('error')
                  ? 'bg-red-100 text-red-800 border border-red-200'
                  : status === 'sending'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'hidden'
              }`}
            >
              {status === 'success' ? (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Thank you! Your quote request has been sent successfully.</span>
                </div>
              ) : status === 'sending' ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending your request...</span>
                </div>
              ) : status === 'error' ? (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{errors.submit || 'An error occurred. Please try again.'}</span>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

