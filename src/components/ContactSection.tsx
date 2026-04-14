import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Instagram, Facebook, Map } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-6xl text-primary mb-12 tracking-wide"
        >
          Kontakt
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-foreground/80 mb-10"
        >
          <div className="flex items-center justify-center gap-3">
            <MapPin size={20} className="text-primary" />
            <span>Kai Hafermann Kolbenfresser · Koppelheck 4 · 56377 Nassau</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone size={20} className="text-primary" />
            <a href="tel:01715745579" className="hover:text-primary transition-colors">0171-5745579</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Instagram, href: "https://www.instagram.com/kolbenfresser_currywurst/", label: "Instagram" },
            { icon: Facebook, href: "https://www.facebook.com/people/Kolbenfresser-Currywurst/61576864632472/?locale=de_DE#", label: "Facebook" },
            { icon: Map, href: "https://maps.app.goo.gl/q4dTzwtFtHohueB28", label: "Google Maps" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
