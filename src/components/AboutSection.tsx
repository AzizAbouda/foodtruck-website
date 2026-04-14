import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import truckImg from "@/assets/FootruckNight.avif";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl text-primary mb-6 tracking-wide">
              Streetfood mit Charakter
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Kolbenfresser steht für ehrliches Streetfood mit Charakter.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Bei uns bekommen Sie Currywurst, Burger, Hotdogs, Pommes und alkoholfreie
              Getränke – frisch zubereitet, mit hochwertigen Zutaten, eigenen Soßen und
              Gewürzen zu fairen Preisen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-lg"
          >
            <div className="relative w-full h-80 md:h-[400px] overflow-hidden rounded-lg">
              <img
                src={truckImg}
                alt="Kolbenfresser Foodtruck"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
