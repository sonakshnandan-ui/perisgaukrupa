import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">
            Peri's <span className="text-gold">Gau Krupa</span>
          </h3>
          <p className="text-background/60 font-body text-sm leading-relaxed">
            Pure, natural desi cow products for a healthier, spiritual lifestyle.
            100% natural &amp; chemical-free.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm text-background/60">
            <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-gold transition-colors">Products</a></li>
            <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-display font-bold mb-3">Connect With Us</h4>
          <div className="space-y-2 font-body text-sm text-background/60">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-7032289893</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>p.v.k.bhramar@gmail.com</span>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/p/PERIS-GAU-KRUPA-100063614301917/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-gold/20 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/peris_gau_krupa_products/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-gold/20 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-background/10 pt-6 text-center">
        <p className="text-xs text-background/40 font-body">
          © {new Date().getFullYear()} Peri's Gau Krupa Products. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
