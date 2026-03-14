import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  const scrollTo = (hash: string) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" aria-hidden="true" />

      {/* Decorative orbs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, hsl(181 100% 36% / 0.6), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, hsl(181 100% 36% / 0.6), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Ready to Get Started?
          </p>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
            Your Brand Deserves{' '}
            <span className="text-gradient-teal">Better Prints</span>
          </h2>

          <p className="font-body text-card/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join over 1,200 businesses across South Africa that trust Eminence
            Printing to deliver exceptional quality — every single time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo('#contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-base group w-full sm:w-auto"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('#contact')}
              className="border-card/30 text-card hover:bg-card/10 hover:border-card/60 font-semibold px-10 py-7 text-base w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Button>
          </div>

          {/* Trust micro-signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-card/50 text-sm font-body">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              No minimum order
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Free proofing available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              72-hour turnaround
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Nationwide delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
