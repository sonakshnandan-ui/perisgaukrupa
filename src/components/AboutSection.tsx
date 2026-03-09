import { Heart, Leaf, Shield, Award } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "No chemicals, preservatives or additives" },
  { icon: Heart, title: "Made with Love", desc: "Handcrafted using traditional methods" },
  { icon: Shield, title: "Pure & Safe", desc: "Sourced from healthy desi cows" },
  { icon: Award, title: "Premium Quality", desc: "Trusted by thousands of families" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-saffron font-body font-semibold uppercase tracking-widest text-sm mb-2">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Sacred Gift of{" "}
              <span className="text-gradient-gold">Gau Mata</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              At Peri's Gau Krupa Products, we believe in the divine blessings of the desi cow.
              Every product is carefully crafted from pure, natural cow-based ingredients using
              time-honoured Ayurvedic traditions.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              From our pure A2 ghee to herbal body care and pooja essentials, we bring
              you the goodness of Gau Seva — directly from our farm to your home.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="rounded-full bg-primary px-6 py-3 font-body font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#products"
                className="rounded-full border-2 border-primary px-6 py-3 font-body font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Our Products
              </a>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-xl bg-background p-6 text-center ornament-border opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15">
                  <f.icon className="h-6 w-6 text-saffron" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
