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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      setStatus(result.message);
      alert('Email sent successfully!');
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
        setStatus(`Error: ${error.message}`);
        alert(`Error: ${error.message}`);
      } else {
        setStatus('An unknown error occurred');
        alert('An unknown error occurred')
      }
    }
  };

  return (
    <section className="py-20 px-10 md:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Free Quote!</h2>
      <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
        <label className="block text-left">
          <span className="text-gray-700">Name</span>
          <span className="text-red-500">*</span>
          <input type="text" name="name" required className="mt-1 p-2 border border-gray-300 w-full" value={formData.name} onChange={handleChange} />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Email</span>
          <span className="text-red-500">*</span>
          <input type="email" name="email" required className="mt-1 p-2 border border-gray-300 w-full" value={formData.email} onChange={handleChange} />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Phone</span>
          <input type="tel" name="phone" className="mt-1 p-2 border border-gray-300 w-full" value={formData.phone} onChange={handleChange} />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Address</span>
          <input type="text" name="address" className="mt-1 p-2 border border-gray-300 w-full" value={formData.address} onChange={handleChange} />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Project</span>
          <span className="text-red-500">*</span>
          <select name="purpose" required className="mt-1 p-2 border border-gray-300 w-full tracking-wide" value={formData.purpose} onChange={handleChange}>
            <option value="">Select a purpose</option>
            <option value="remodeling">New Custom Building</option>
            <option value="maintenance">Home Addition(ADU)</option>
            <option value="addition">Renovation</option>
          </select>
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Message</span>
          <span className="text-red-500">*</span>
          <textarea name="message" required className="mt-1 p-2 border border-gray-300 w-full h-40" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
          Send
        </button>
      </form>
      {/* {status && <p className="mt-4 text-center">{status}</p>} */}
    </section>
  );
}
