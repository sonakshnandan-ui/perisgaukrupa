import { Sparkles, Droplets, FlameKindling, Bug } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Ayurvedic Wellness",
    desc: "Our products follow ancient Ayurvedic formulations for holistic health and well-being.",
  },
  {
    icon: Droplets,
    title: "Pure Ingredients",
    desc: "Made from Panchagavya — cow milk, curd, ghee, urine & dung — nature's gifts.",
  },
  {
    icon: FlameKindling,
    title: "Spiritual Purity",
    desc: "Sambrani, dhoop, and pooja items to create a sacred atmosphere in your home.",
  },
  {
    icon: Bug,
    title: "Eco-Friendly",
    desc: "Natural mosquito repellents and home care products that protect without chemicals.",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 bg-gradient-warm text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <p className="font-body font-semibold uppercase tracking-widest text-sm mb-2 text-gold">
        Why Choose Us
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
        Benefits of Desi Cow Products
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm p-6 opacity-0 animate-fade-up"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
              <b.icon className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">{b.title}</h3>
            <p className="text-sm text-primary-foreground/70 font-body">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
