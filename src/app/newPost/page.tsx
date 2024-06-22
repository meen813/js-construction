'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('Uploading...');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      setStatus('Post created successfully!');

      // redirect to main forum page
      router.push('/forum');
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus('An unknown error occurred');
      }
    }
  };

  return (
    <section className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">New Post</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-left">
              <span className="text-gray-700">Title</span>
              <input
                type="text"
                name="title"
                className="mt-1 p-2 border border-gray-300 w-full rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-left">
              <span className="text-gray-700">Content</span>
              <textarea
                name="content"
                className="mt-1 p-2 border border-gray-300 w-full h-40 rounded-md"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-left">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                name="author"
                className="mt-1 p-2 border border-gray-300 w-full rounded-md"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-left">
              <span className="text-gray-700">Image</span>
              <input
                type="file"
                name="image"
                className="mt-1 p-2 border border-gray-300 w-full rounded-md"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              />
            </label>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </div>
    </section>
  );
}
