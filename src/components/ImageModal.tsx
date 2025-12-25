import { useEffect, useState, useCallback, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ComparisonImages {
  before: StaticImageData;
  after: StaticImageData;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: (StaticImageData | string)[];
  initialIndex: number;
  comparisonImages?: ComparisonImages;
  title: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  images,
  initialIndex,
  comparisonImages,
  title
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Sync internal state with prop when modal opens
  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousFocusRef.current = document.activeElement as HTMLElement;
      setCurrentIndex(initialIndex);
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
      // Return focus to the previously focused element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  // Handle navigation
  const nextImage = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [images.length, isTransitioning]);

  const prevImage = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [images.length, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextImage, prevImage, onClose]);

  // Focus trap: Keep focus within modal
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <h2 id="modal-title" className="sr-only">Image Gallery: {title}</h2>
      <p id="modal-description" className="sr-only">
        Viewing image {currentIndex + 1} of {images.length}. Use arrow keys to navigate, Escape to close.
      </p>
      {/* Close Button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="Close image gallery modal"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
            aria-label={`Previous image (${currentIndex === 0 ? images.length : currentIndex} of ${images.length})`}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
            aria-label={`Next image (${currentIndex + 2 > images.length ? 1 : currentIndex + 2} of ${images.length})`}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Main Content Area */}
      <div className="relative w-full h-full p-4 md:p-12 flex flex-col items-center justify-center">
        <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
          {/* Comparison View for Index 0 */}
          {currentIndex === 0 && comparisonImages ? (
            <div className="relative w-full h-full flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl">
              {/* Before Image */}
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/20">
                <Image
                  src={comparisonImages.before}
                  alt={`${title} - Before`}
                  fill
                  className="object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-black/60 px-4 py-1.5 rounded text-white text-sm font-bold tracking-wider backdrop-blur-sm uppercase">
                  Before
                </div>
              </div>
              {/* After Image */}
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-black">
                <Image
                  src={comparisonImages.after}
                  alt={`${title} - After`}
                  fill
                  className="object-contain"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-blue-600/80 px-4 py-1.5 rounded text-white text-sm font-bold tracking-wider backdrop-blur-sm uppercase">
                  After
                </div>
              </div>
            </div>
          ) : (
            /* Standard Single Image View */
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority={true}
                sizes="100vw"
                quality={90}
              />
            </div>
          )}
        </div>

        {/* Counter / Caption */}
        <div className="absolute bottom-6 left-0 right-0 text-center z-50 pointer-events-none">
          <div className="inline-block bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white/90 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
