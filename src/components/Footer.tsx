const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading text-xl text-primary mb-4 tracking-wide">KOLBENFRESSER</p>
      <div className="text-muted-foreground text-sm space-y-1 mb-6">
        <p>Kai Hafermann Kolbenfresser</p>
        <p>Koppelheck 4 · 56377 Nassau</p>
        <p>0171-5745579</p>
        <p>USt. ID DE325638253</p>
      </div>
      <p className="text-muted-foreground/50 text-xs">
        © {new Date().getFullYear()} Kolbenfresser. Alle Rechte vorbehalten.
      </p>
    </div>
  </footer>
);

export default Footer;
