import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sipho Dlamini',
    role: 'Marketing Director',
    company: 'Afrique Brands',
    quote:
      'Eminence Printing delivered our full rebrand collateral — banners, flyers, and business cards — in under 72 hours. The quality was absolutely stunning. Our clients immediately noticed the upgrade.',
    rating: 5,
    initials: 'SD',
  },
  {
    name: 'Lerato Mokoena',
    role: 'Founder',
    company: 'Bloom Boutique',
    quote:
      'We use Eminence for all our packaging and branded bags. The consistency and attention to colour accuracy is something no other printer has matched. They truly care about your brand.',
    rating: 5,
    initials: 'LM',
  },
  {
    name: 'James Ferreira',
    role: 'Event Manager',
    company: 'Pinnacle Events',
    quote:
      'Ordered 50 roll-up banners with a 48-hour deadline. Not only were they delivered on time, but the print quality was sharper than the files we sent. That is professional service.',
    rating: 5,
    initials: 'JF',
  },
  {
    name: 'Nomvula Khumalo',
    role: 'Owner',
    company: 'NK Hair Studio',
    quote:
      'The vehicle wrap they did for my delivery van has brought in more walk-in customers than any social media ad I have run. Worth every rand. Will never go anywhere else.',
    rating: 5,
    initials: 'NK',
  },
  {
    name: 'Riyaad Ismail',
    role: 'CEO',
    company: 'Meridian Construction',
    quote:
      'Professional, fast, and genuinely invested in making your brand look its best. Eminence Printing is one of those rare suppliers that feels like a business partner, not just a vendor.',
    rating: 5,
    initials: 'RI',
  },
  {
    name: 'Thandi Sithole',
    role: 'Operations Lead',
    company: 'Ubuntu Tech',
    quote:
      'From the initial quote to delivery, the communication was perfect and the end product was better than expected. Our team shirts and lanyards were a huge hit at the conference.',
    rating: 5,
    initials: 'TS',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Client Voices
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Businesses Across SA
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it. Here is what our clients say about working
            with Eminence Printing.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-7 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col gap-5"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-7 text-primary/10">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-body text-foreground/80 text-sm leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-white text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-muted-foreground text-xs">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
