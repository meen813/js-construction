import { Project } from '../projects/types'
import stairsImage1 from '../../public/stairs/stairs1.jpg';
import stairsImage2 from '../../public/stairs/stairs2.jpg';

const project3: Project = {
  id: 3,
  title: 'Custom Staircase Design (2023)',
  shortDescription: 'Floating steps with elegant wood finishes and modern design.',
  tagline: 'Contemporary look with structural integrity',
  year: 2023,
  category: 'residential',
  projectType: 'remodel',
  description: "This project features a stunning custom staircase with elegant wood finishes and modern design elements. The floating steps create a contemporary look while maintaining structural integrity and safety.",
  image: stairsImage1,
  additionalImages: [stairsImage1, stairsImage2],
};

export default project3;
