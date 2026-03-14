import { motion } from 'framer-motion';
import { 
  FileText, 
  Flag, 
  CreditCard, 
  Car, 
  Image, 
  Signpost, 
  Package, 
  Shirt 
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    name: 'Flyers & Brochures',
    description: 'Eye-catching promotional materials that grab attention and drive action.',
  },
  {
    icon: Flag,
    name: 'Banners & Flags',
    description: 'Large format prints that make your brand impossible to miss.',
  },
  {
    icon: CreditCard,
    name: 'Business Cards',
    description: 'Premium quality cards that leave lasting first impressions.',
  },
  {
    icon: Car,
    name: 'Vehicle Branding',
    description: 'Transform your vehicles into moving billboards for your business.',
  },
  {
    icon: Image,
    name: 'Posters & Prints',
    description: 'High-resolution prints that bring your visuals to life.',
  },
  {
    icon: Signpost,
    name: 'Signage Solutions',
    description: 'Indoor and outdoor signs that guide and attract customers.',
  },
  {
    icon: Package,
    name: 'Custom Packaging',
    description: 'Branded packaging that elevates your product presentation.',
  },
  {
    icon: Shirt,
    name: 'T-Shirt Printing',
    description: 'Quality apparel printing for teams, events, and merchandise.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
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
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Printing Services
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            From small-scale business cards to large format banners, we deliver 
            exceptional quality across all our printing services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.name}
              </h3>
              
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
