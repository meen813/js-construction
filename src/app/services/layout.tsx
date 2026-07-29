import { Metadata } from 'next';

// page.tsx holds card-expansion state, so it must stay a client component and
// cannot export metadata itself. The segment layout carries it instead.
export const metadata: Metadata = {
  title: 'Services',
  description:
    'Commercial renovation, tenant improvement, ADA compliance upgrades, ADUs, kitchen and bath remodeling, and structural work across Southern California.',
  openGraph: {
    title: 'HJS Construction Services',
    description: 'Tenant improvement, ADA upgrades, renovation, and residential construction.',
    images: ['/logo/logo.png'],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
