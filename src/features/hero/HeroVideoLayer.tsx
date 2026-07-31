'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import {
  HERO_POSTER_SRC,
  HERO_VIDEO_DESCRIPTION_ID,
  HERO_VIDEO_MIME_TYPE,
  HERO_VIDEO_SOURCES,
  PRIMARY_VIDEO_INDEX,
} from './heroConstants';

export default function HeroVideoLayer() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(PRIMARY_VIDEO_INDEX);
  /**
   * Follow-up clips stay unmounted until the primary one is actually playing, so
   * their bytes never compete with the poster and hero copy during first paint.
   * They mount a full clip-length ahead of when the crossfade needs them.
   */
  const [areFollowUpClipsEnabled, setAreFollowUpClipsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /**
   * The primary clip ships in the server-rendered HTML, so it starts loading and
   * playing before React hydrates. Its `loadeddata`/`play` events can therefore
   * fire before any handler is attached. Reconcile from the element's own state
   * on mount rather than waiting for an event that already happened.
   */
  useEffect(() => {
    const primaryVideo = videoRefs.current[PRIMARY_VIDEO_INDEX];
    if (!primaryVideo) return;

    if (primaryVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setAreFollowUpClipsEnabled(true);
    }
    setIsVideoPlaying(!primaryVideo.paused);
  }, []);

  useEffect(() => {
    HERO_VIDEO_SOURCES.forEach((_, index) => {
      const video = videoRefs.current[index];
      if (!video) return;

      if (index !== currentVideoIndex || prefersReducedMotion) {
        video.pause();
        return;
      }

      if (video.paused) {
        video.currentTime = 0;
        // Autoplay can still be refused (e.g. battery saver); fall back to the poster.
        video.play().catch(() => setIsVideoPlaying(false));
      }
    });
  }, [prefersReducedMotion, currentVideoIndex]);

  const handlePrimaryClipReady = useCallback(() => {
    setAreFollowUpClipsEnabled(true);
  }, []);

  const handleClipEnded = useCallback(() => {
    setCurrentVideoIndex((previousIndex) => (previousIndex + 1) % HERO_VIDEO_SOURCES.length);
  }, []);

  const toggleVideoPlayback = useCallback(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (!currentVideo) return;

    if (currentVideo.paused) {
      currentVideo.play().catch(() => setIsVideoPlaying(false));
      return;
    }
    currentVideo.pause();
  }, [currentVideoIndex]);

  return (
    <>
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_VIDEO_SOURCES.map((videoSrc, index) => {
          const isPrimary = index === PRIMARY_VIDEO_INDEX;
          if (!isPrimary && !areFollowUpClipsEnabled) return null;

          return (
            <video
              key={videoSrc}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              autoPlay={isPrimary && !prefersReducedMotion}
              muted
              playsInline
              preload={isPrimary ? 'auto' : 'metadata'}
              poster={isPrimary ? HERO_POSTER_SRC : undefined}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Background video showing construction projects and building exteriors"
              aria-describedby={HERO_VIDEO_DESCRIPTION_ID}
              onLoadedData={isPrimary ? handlePrimaryClipReady : undefined}
              onPlay={() => {
                if (index === currentVideoIndex) setIsVideoPlaying(true);
                if (isPrimary) handlePrimaryClipReady();
              }}
              onPause={() => {
                if (index === currentVideoIndex) setIsVideoPlaying(false);
              }}
              onEnded={() => {
                if (index === currentVideoIndex) handleClipEnded();
              }}
            >
              <source src={videoSrc} type={HERO_VIDEO_MIME_TYPE} />
              Your browser does not support the video tag.
            </video>
          );
        })}
        <span id={HERO_VIDEO_DESCRIPTION_ID} className="sr-only">
          Background video displaying construction projects including modern retail buildings and
          architectural exteriors showcasing HJS Construction&apos;s work
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-50" role="group" aria-label="Video controls">
        <button
          onClick={toggleVideoPlayback}
          aria-label={isVideoPlaying ? 'Pause background video' : 'Play background video'}
          title={isVideoPlaying ? 'Pause video' : 'Play video'}
          className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        >
          {isVideoPlaying ? (
            <Pause className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" aria-hidden="true" />
          )}
        </button>
      </div>
    </>
  );
}
