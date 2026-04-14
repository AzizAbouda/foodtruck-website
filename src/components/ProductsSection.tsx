import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import burgerImg from "@/assets/BurgerPic.png";
import zuendwurst from "@/assets/food.avif";
import hotdogImg from "@/assets/hotdog.jpg";
import friesImg from "@/assets/Pommes.jpeg";

const products = [
  { title: "Burger", desc: "Saftige Burger mit hausgemachten Soßen.", img: burgerImg },
  { title: "Zündwurst", desc: "Unsere Zündwurst – Brat- oder Rindswurst mit würziger Currysoße & individuellen Toppings.", img: zuendwurst },
  { title: "Asphaltpommes", desc: "Knusprig goldene Pommes – unser Signature.", img: friesImg },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-6xl text-primary text-center mb-16 tracking-wide"
        >
          Unsere Spezialitäten
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-colors"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-2xl text-primary mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
