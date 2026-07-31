import { ChevronDown } from 'lucide-react';
import HeroContent from './HeroContent';
import HeroVideoLayer from './HeroVideoLayer';

/**
 * Hero shell. Only the video layer needs the client bundle; the copy and chrome
 * around it stay server-rendered.
 */
export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-black">
      <HeroVideoLayer />

      {/*
        The mid stop is 60%, not 50%. At 50% the brightest frames of the second
        clip left the body copy at 4.06:1 against white — under the 4.5:1 WCAG AA
        floor for normal-size text. 60% puts the worst measured frame at 5.85:1.
        Lower this only after re-measuring against the actual clips.
      */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"
        style={{ zIndex: 1 }}
      />

      <HeroContent />

      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent"
        style={{ zIndex: 2 }}
      />

      {/* `animate-bounce` is neutralised by the global prefers-reduced-motion rule. */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        <ChevronDown className="w-8 h-8 opacity-80" aria-hidden="true" />
      </div>
    </section>
  );
}
