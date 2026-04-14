import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";
import menu1 from "@/assets/MenuFirst.jpg";
import menu2 from "@/assets/MenuSecond.jpg";

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <>
      <section id="menu" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-primary mb-4 tracking-wide">
              Speisekarte
            </h2>
            <p className="text-muted-foreground">Unsere Spezialitäten – frisch zubereitet.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[menu1, menu2].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setModalImg(img)}
              >
                <img
                  src={img}
                  alt={`Speisekarte Seite ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={1120}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setModalImg(null)}
          >
            <button className="absolute top-6 right-6 text-foreground" onClick={() => setModalImg(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={modalImg}
              alt="Speisekarte"
              className="max-h-[90vh] max-w-full rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuSection;
