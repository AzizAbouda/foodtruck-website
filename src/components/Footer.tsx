import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading text-xl text-primary mb-4 tracking-wide">KOLBENFRESSER</p>
      <div className="flex items-center justify-center gap-6 mb-6">
        <Link
          to="/impressum"
          className="text-sm text-foreground/80 hover:text-primary transition-colors"
        >
          Impressum
        </Link>
        <span className="text-muted-foreground/40">·</span>
        <Link
          to="/datenschutz"
          className="text-sm text-foreground/80 hover:text-primary transition-colors"
        >
          Datenschutz
        </Link>
      </div>
      <p className="text-muted-foreground/50 text-xs">
        © {new Date().getFullYear()} Kolbenfresser. Alle Rechte vorbehalten.
      </p>
    </div>
  </footer>
);

export default Footer;
