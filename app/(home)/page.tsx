import { ComponentShowcase } from '@/internal/components/component-showcase';
import { CallToAction } from '@/internal/components/cta';
import { Hero } from '@/internal/components/hero';
import { Features } from '@/internal/components/features';
import { Footer } from '@/internal/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethereal Garden',
  description: 'A React component library with cyberpunk aesthetics',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow main-container">
        <Hero />
        <Features />
        <ComponentShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
