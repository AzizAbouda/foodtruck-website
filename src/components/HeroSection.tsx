import { motion } from "framer-motion";
import heroImg from "@/assets/bg.png";

const GOOGLE_FORM_URL = "https://forms.gle/SqzV1o5aHJRKebyM8";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImg}
        alt="Kolbenfresser Foodtruck"
        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl sm:text-7xl md:text-9xl tracking-wider text-primary mb-4"
        >
          KOLBENFRESSER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-xl sm:text-2xl md:text-3xl tracking-wide text-foreground mb-4"
        >
          Zündwurst, Burger, Hotdogs &amp; Asphaltpommes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm md:text-base"
        >
          Streetfood mit Charakter. Frisch zubereitet mit eigenen Soßen und Gewürzen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Speisekarte ansehen
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/30 text-foreground px-8 py-3 rounded-md font-semibold hover:bg-foreground/10 transition-colors"
          >
            Catering anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
