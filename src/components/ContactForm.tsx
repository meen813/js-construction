'use client'
import { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    if (!formData.purpose) {
      errors.push('Please select a project type');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setStatus(`error: ${validationErrors.join(', ')}`);
      return;
    }
    
    setIsSubmitting(true);
    setStatus('Sending...');

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
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`error: ${error.message}`);
      } else {
        setStatus('error: An unknown error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Request Your Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your construction project? Get a personalized quote from our expert team. 
            We&apos;ll respond within 24 hours.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Form Container */}
        <div className="card-gradient p-4 sm:p-6 md:p-8 lg:p-12">
          <form className="max-w-2xl mx-auto space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="form-input w-full" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="form-input w-full" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Phone and Address Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  className="form-input w-full" 
                  value={formData.phone} 
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Address
                </label>
                <input 
                  type="text" 
                  name="address" 
                  className="form-input w-full" 
                  value={formData.address} 
                  onChange={handleChange}
                  placeholder="123 Main St, City, State"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select 
                name="purpose" 
                required 
                className="form-select" 
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
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea 
                name="message" 
                required 
                className="form-textarea h-32" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary text-lg px-12 py-4 rounded-xl min-w-[200px] ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Quote Request'
                )}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div className={`text-center p-4 rounded-lg ${
                status === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : status.startsWith('error')
                  ? 'bg-red-100 text-red-800 border border-red-200'
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}>
                {status === 'success' ? (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! Your quote request has been sent successfully.
                  </div>
                ) : (
                  status
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
