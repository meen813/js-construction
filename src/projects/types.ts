import { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  tagline: string;
  year: number;
  /** City and state, e.g. 'Manhattan Beach, California'. Shown in the overview and JSON-LD. */
  location: string;
  /** ISO-ish completion date: 'YYYY' or 'YYYY-MM'. Used in JSON-LD. */
  completionDate: string;
  /** Human label for the overview, e.g. 'Commercial Mall Renovation'. */
  projectTypeLabel: string;
  /** Human timeline for the overview, e.g. 'Completed March 2026'. */
  timeline: string;
  category: 'residential' | 'commercial';
  projectType: 'new-build' | 'remodel' | 'renovation' | 'ada-upgrade' | 'addition';
  image: StaticImageData;
  additionalImages?: StaticImageData[];
  comparisonImages?: {
    before: StaticImageData;
    after: StaticImageData;
  };
};

