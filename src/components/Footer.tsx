import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollTo = (hash: string) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/27821234567', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-foreground text-card">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-1">
            <div>
              <span className="font-display text-2xl font-bold text-card">
                Eminence<span className="text-primary">.</span>
              </span>
              <p className="font-body text-card/60 text-sm leading-relaxed mt-4">
                South Africa's premium printing partner. Quality that speaks for
                itself — every print, every time.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 text-card" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-card text-base mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-card/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-card text-base mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0789356433"
                  className="flex items-center gap-3 text-sm text-card/60 hover:text-primary transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body">078 935 6433</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27789356433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-card/60 hover:text-primary transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body">WhatsApp: 078 935 6433</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@eminenceprinting.co.za"
                  className="flex items-center gap-3 text-sm text-card/60 hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body">hello@eminenceprinting.co.za</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-card/60">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body">123 Print Avenue,<br />Johannesburg, South Africa</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-card/40 text-sm font-body">
            <p>© {new Date().getFullYear()} Eminence Printing. All rights reserved.</p>
            <p>Designed &amp; built in South Africa 🇿🇦</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
