export default function ContactForm() {
  return (
    <section className="py-20 px-10 md:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Free Quote!</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <label className="block text-left">
          <span className="text-gray-700">Name</span>
          <span className="text-red-500">*</span>
          <input type="text" name="name" required className="mt-1 p-2 border border-gray-300 w-full" />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Email</span>
          <span className="text-red-500">*</span>
          <input type="email" name="email" required className="mt-1 p-2 border border-gray-300 w-full" />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Phone</span>
          <input type="tel" name="phone" className="mt-1 p-2 border border-gray-300 w-full" />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Address</span>
          <input type="address" name="address" className="mt-1 p-2 border border-gray-300 w-full" />
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Project</span>
          <span className="text-red-500">*</span>
          <select name="purpose" required className="mt-1 p-2 border border-gray-300 w-full tracking-wide">
            <option value="">Select a purpose</option>
            <option value="remodeling">New Custom Building</option>
            <option value="maintenance">Home Addition(ADU)</option>
            <option value="addition">Renovation</option>
          </select>
        </label>
        <label className="block text-left">
          <span className="text-gray-700">Message</span>
          <span className="text-red-500">*</span>
          <textarea name="message" required className="mt-1 p-2 border border-gray-300 w-full h-40"></textarea>
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
          Send
        </button>
      </form>
    </section>
  );
}
