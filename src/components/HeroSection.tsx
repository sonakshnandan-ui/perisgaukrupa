import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/917032289893?text=Hello%20I%20am%20interested%20in%20your%20Desi%20Cow%20Products";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sacred Desi Cow with traditional products"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <p
            className="mb-4 inline-block rounded-full bg-saffron/20 px-4 py-1.5 font-body text-sm font-semibold tracking-wider text-cream opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            🐄 100% NATURAL &amp; PURE
          </p>
          <h1
            className="mb-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-cream opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Peri's{" "}
            <span className="text-gradient-gold">Gau Krupa</span>{" "}
            Products
          </h1>
          <p
            className="mb-8 max-w-lg font-body text-lg text-cream/80 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Pure, natural desi cow products crafted with love and tradition.
            From ghee to herbal care — experience the divine blessings of Gau Mata.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#products"
              className="rounded-full bg-gradient-saffron px-8 py-3.5 font-body font-bold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              Explore Products
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-cream/40 px-8 py-3.5 font-body font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream/10 hover:border-cream"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float"
      >
        <ArrowDown className="h-6 w-6 text-cream/60" />
      </a>
    </section>
  );
};

export default HeroSection;
