/**
 * Hero media + entrance-timing constants.
 *
 * Source clips are encoded H.264 CRF 30 with `-movflags +faststart` so the moov
 * atom sits at the head of the file; without it the browser must download the
 * whole clip before it can decode the first frame.
 */

export const HERO_POSTER_SRC = '/video/hero-poster.webp';

/** First entry is the clip that streams on load; the rest are fetched lazily. */
export const HERO_VIDEO_SOURCES = [
  '/video/hero-construction-site.mp4',
  '/video/hero-retail-building.mp4',
] as const;

export const PRIMARY_VIDEO_INDEX = 0;

export const HERO_VIDEO_MIME_TYPE = 'video/mp4';

/** Crossfade between clips, in ms. Must match `duration-1000` on the video layer. */
export const HERO_CROSSFADE_MS = 1000;

/**
 * Entrance delays (ms) for the hero copy. These drive a CSS `animation-delay`
 * custom property rather than a JS animation library, so the text paints from
 * server-rendered HTML instead of waiting on hydration.
 */
export const HERO_REVEAL_DELAYS_MS = {
  heading: 200,
  keywords: 400,
  divider: 500,
  trustBadge: 600,
  description: 800,
  actions: 1000,
} as const;

export const HERO_KEYWORDS = ['Commercial', 'Residential', 'New Build', 'ADU'] as const;

export const HERO_VIDEO_DESCRIPTION_ID = 'hero-video-description';
