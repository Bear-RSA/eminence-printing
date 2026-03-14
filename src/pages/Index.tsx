import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero — first impression, value proposition */}
        <HeroSection />

        {/* 2. Services — what we offer */}
        <ServicesSection />

        {/* 3. Why Choose Us — credibility & differentiators */}
        <WhyChooseUs />

        {/* 4. Portfolio — show don't tell */}
        <GallerySection />

        {/* 5. Testimonials — social proof */}
        <TestimonialsSection />

        {/* 6. CTA — conversion nudge before contact */}
        <CtaSection />

        {/* 7. Contact Form — lead capture */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
