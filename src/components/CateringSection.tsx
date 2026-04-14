import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cateringImg from "@/assets/catering.jpg";

const GOOGLE_FORM_URL = "https://docs.google.com/forms";

const CateringSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="catering" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <img
        src={cateringImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/80" />

      <div ref={ref} className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-6xl text-primary mb-8 tracking-wide"
        >
          Kolbenfresser für Ihr Event
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground/80 leading-relaxed space-y-4 mb-10"
        >
          <p>Sie suchen einen Foodtruck für Ihre Feier oder Event?</p>
          <p>
            Wir bieten Ihnen einen Komplettservice mit Pommes, Brat- und Currywurst,
            Hotdogs sowie Burger und alkoholfreien Getränken.
          </p>
          <p>
            Unser Verständnis sind qualitativ hochwertige Produkte, eigene Soßen und
            Gewürze zu fairen Preisen.
          </p>
          <p>Sie können sorgenfrei feiern und Ihre Gäste genießen.</p>
          <p>
            Sprechen Sie uns an und wir unterbreiten Ihnen ein individuelles Angebot
            für Ihre Party.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors"
        >
          Jetzt Catering anfragen
        </motion.a>
      </div>
    </section>
  );
};

export default CateringSection;
