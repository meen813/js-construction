import { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  tagline: string;
  year: number;
  category: 'residential' | 'commercial';
  projectType: 'new-build' | 'remodel' | 'renovation' | 'ada-upgrade' | 'addition';
  image: StaticImageData;
  additionalImages?: StaticImageData[];
};

