import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { Services } from '@/components/sections/services';
import { Capabilities } from '@/components/sections/capabilities';
import { Process } from '@/components/sections/process';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Capabilities />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
