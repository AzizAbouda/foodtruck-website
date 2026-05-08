import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
const testimonials = [
  {
    name: "Rüdiger S.",
    text: "Leckere Pommes, Currywurst der Spitzenklasse,und super nettes Personal weiter so",
    rating: 5,
  },
  {
    name: "Mario F.",
    text: "Leckere echte Curtywurst, schöne dicke Pommes, alles sehr sauber und richtig nette Leute mit guter Laune. Bar und Karte möglich. Haben hier letzte Woche auf einer Motorrad Runde gehalten. Absolut empfehlenswert.",
    rating: 5,
  },
  {
    name: "Andy W.",
    text: "Alles schön sauber, klasse Pommes, Bratwurst aus der Region, supernetter Service, angemessene Preise und frisch gebrühter Kaffee! Klasse! 😃😋👍 SO geht Imbiss in GUT!!! ...",
    rating: 5,
  },
  {
    name: "Pinky B.",
    text: "Die Currywurst und Soße waren sehr gut. Pommes, wie man sie sich wünscht. Toller und freundlicher Service. Ambiente originell und alles sehr sauber. 🤤☺️",
    rating: 5,
  },
  {
    name: "Leon S.",
    text: "Essen war mega Lecker! Und das beste, der Name hält was er verspricht, Abends war mein Privatwagen auch mit nem Kolbenfresser bedient, gerne wieder",
    rating: 4,
  },
  {
    name: "Manuela B.",
    text: "Ich hatte die Zündwurst mit Pommes und war absolut begeistert.Die Pommes waren perfekt frittiert: goldbraun, knusprig und nicht fettig. Man merkt, dass hier mit Leidenschaft gegrillt wird. Klare Empfehlung , ich freue mich schon aufs nächste Mal! 🔥🌭🍟",
    rating: 5,
  },
];
const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-primary tracking-wide mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Ehrliche Stimmen von echten Gästen
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-secondary/40 border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors group"
            >
              <Quote
                className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors"
                size={40}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                „{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading text-lg text-primary tracking-wide">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;