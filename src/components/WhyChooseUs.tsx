import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '12+',
    label: 'Years of Experience',
    description: 'Trusted by businesses across South Africa',
  },
  {
    icon: CheckCircle2,
    value: '1200+',
    label: 'Projects Completed',
    description: 'Delivering excellence with every print',
  },
  {
    icon: Clock,
    value: '72hr',
    label: 'Avg Turnaround Time',
    description: 'Fast delivery without compromising quality',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Why Choose Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                At Eminence Printing, we believe every print tells a story. With over a decade 
                of experience, we've perfected the art of bringing your vision to life through 
                premium quality materials and meticulous attention to detail.
              </p>
              
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Our state-of-the-art equipment combined with our skilled craftsmen ensures 
                that every project—whether a simple business card or a large-scale banner—is 
                delivered with the excellence your brand deserves.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {['Premium Materials', 'Expert Team', 'On-Time Delivery', 'Affordable Pricing'].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-6 bg-card rounded-xl p-6 shadow-card"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
