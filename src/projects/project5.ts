import { Project } from '../projects/types'
import kitchenImage1 from '../../public/Kitchen Renovation/temp_1600188712382.2053667570.jpeg';
import kitchenImage2 from '../../public/Kitchen Renovation/temp_1600188724702.1531496662.jpeg';
import kitchenImage3 from '../../public/Kitchen Renovation/temp_1600188738592.26511987.jpeg';
import kitchenImage4 from '../../public/Kitchen Renovation/temp_1600188748251.-1639665290.jpeg';
import kitchenImage5 from '../../public/Kitchen Renovation/temp_1600188757718.-879721925.jpeg';

const project5: Project = {
  id: 5,
  title: 'Fullerton Kitchen Remodel (2022)',
  shortDescription: 'Dark shaker cabinets with white quartz countertops and waterfall island.',
  tagline: 'Elegant functionality meets contemporary design',
  year: 2022,
  category: 'residential',
  projectType: 'remodel',
  description: "This kitchen remodel transformed an outdated space into a sleek, modern cooking area. Featuring dark shaker cabinets paired with white Calacatta-style quartz countertops and full backsplash, the design balances elegance and functionality. A spacious island with an integrated cooktop and waterfall edges serves as the centerpiece, while stainless-steel appliances and a farmhouse sink complete the clean, contemporary look.",
  image: kitchenImage1,
  additionalImages: [kitchenImage2, kitchenImage3, kitchenImage4, kitchenImage5],
};

export default project5;
