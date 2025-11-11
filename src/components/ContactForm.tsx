'use client'
import { useState, useRef } from 'react';

type FormStatus = {
  type: 'idle' | 'sending' | 'success' | 'error';
  message: string;
};

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  purpose: '',
  message: '',
};

type FormErrors = Partial<Record<keyof typeof initialFormState, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof FormErrors];
        return updated;
      });
    }
  };

  const validateForm = () => {
    const validationErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      validationErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && formData.phone.replace(/[^0-9+()\-\s]/g, '').length < formData.phone.length) {
      validationErrors.phone = 'Phone number contains invalid characters';
    }

    if (!formData.purpose) {
      validationErrors.purpose = 'Please select a project type';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      validationErrors.message = 'Message must be at least 10 characters long';
    }

    return validationErrors;
  };

  const focusFirstErrorField = (validationErrors: FormErrors) => {
    const firstErrorKey = Object.keys(validationErrors)[0] as keyof typeof initialFormState | undefined;
    if (!firstErrorKey) return;

    const field = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorKey}"]`);
    field?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({ type: 'error', message: 'Please correct the highlighted fields and try again.' });
      focusFirstErrorField(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'sending', message: 'Sending your request…' });

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
        const serverErrors: FormErrors = {};
        if (Array.isArray(result.errors)) {
          result.errors.forEach((error: string) => {
            if (error.toLowerCase().includes('name')) serverErrors.name = error;
            if (error.toLowerCase().includes('email')) serverErrors.email = error;
            if (error.toLowerCase().includes('message')) serverErrors.message = error;
            if (error.toLowerCase().includes('project')) serverErrors.purpose = error;
          });
        }
        setErrors(serverErrors);
        setStatus({ type: 'error', message: result.message || 'Failed to send email' });
        focusFirstErrorField(serverErrors);
        throw new Error(result.message || 'Failed to send email');
      }

      setStatus({ type: 'success', message: 'Thank you! Your quote request has been sent successfully.' });
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      if (!(error instanceof Error)) {
        setStatus({ type: 'error', message: 'An unknown error occurred. Please try again later.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-form-heading">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="contact-form-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Request Your Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your construction project? Get a personalized quote from our expert team. We&apos;ll respond within 24 hours.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full" aria-hidden="true"></div>
        </div>

        {/* Form Container */}
        <div className="card-gradient p-4 sm:p-6 md:p-8 lg:p-12">
          <form
            ref={formRef}
            className="max-w-2xl mx-auto space-y-4 sm:space-y-6"
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="contact-form-required"
          >
            <p id="contact-form-required" className="text-sm text-gray-600">
              <span aria-hidden="true" className="text-red-600">*</span> indicates required fields.
            </p>

            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                  Full Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="form-input w-full"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                  Email Address <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="form-input w-full"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Address Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="form-input w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
                />
                <p id="phone-hint" className="mt-2 text-xs text-gray-500">
                  Optional. Include country code for international numbers.
                </p>
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="address">
                  Project Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="form-input w-full"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main St, City, State"
                  aria-describedby="address-hint"
                />
                <p id="address-hint" className="mt-2 text-xs text-gray-500">
                  Optional. Providing the address helps us research permitting and zoning requirements.
                </p>
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="purpose">
                Project Type <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <select
                id="purpose"
                name="purpose"
                required
                className="form-select"
                value={formData.purpose}
                onChange={handleChange}
                aria-invalid={Boolean(errors.purpose)}
                aria-describedby={errors.purpose ? 'purpose-error' : 'purpose-hint'}
              >
                <option value="">Select your project type</option>
                <option value="new-custom-building">New Custom Building</option>
                <option value="home-addition-adu">Home Addition (ADU)</option>
                <option value="remodel">Remodel</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </select>
              <p id="purpose-hint" className="mt-2 text-xs text-gray-500">
                Required so we can connect you with the right project manager.
              </p>
              {errors.purpose && (
                <p id="purpose-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.purpose}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                Project Details <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea h-32"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : 'message-hint'}
              ></textarea>
              <p id="message-hint" className="mt-2 text-xs text-gray-500">
                Provide at least a couple of sentences so we can prepare useful next steps before we call.
              </p>
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
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
                  <div className="flex items-center justify-center" aria-live="polite">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
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
            {status.type !== 'idle' && (
              <div
                role={status.type === 'error' ? 'alert' : 'status'}
                aria-live={status.type === 'error' ? 'assertive' : 'polite'}
                className={`text-center p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : status.type === 'error'
                    ? 'bg-red-100 text-red-800 border border-red-200'
                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
