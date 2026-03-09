import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lakshmi Devi",
    text: "The desi ghee is absolutely pure and reminds me of my grandmother's homemade ghee. Best quality!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    text: "Sambrani cups give such a divine fragrance during pooja. My whole family loves them. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "The herbal shampoo powder is amazing! My hair feels so much healthier and the itchy scalp problem is gone.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-saffron font-body font-semibold uppercase tracking-widest text-sm mb-2">
          Testimonials
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          What Our <span className="text-gradient-gold">Customers</span> Say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="rounded-xl bg-card p-6 ornament-border opacity-0 animate-fade-up"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-muted-foreground font-body text-sm italic mb-4">"{t.text}"</p>
            <p className="font-display font-bold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
