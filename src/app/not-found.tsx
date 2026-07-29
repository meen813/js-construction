import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium tracking-wider uppercase hover:bg-gray-700 transition-colors"
          >
            View Our Projects
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium tracking-wider uppercase hover:border-gray-500 hover:text-gray-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
