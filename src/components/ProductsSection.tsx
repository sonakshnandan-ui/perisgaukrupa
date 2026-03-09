import gheeImg from "@/assets/ghee.jpeg";
import sambraniImg from "@/assets/sambrani.jpeg";
import honeyImg from "@/assets/honey.jpeg";
import dhoopImg from "@/assets/dhoop.jpeg";
import oilImg from "@/assets/medicinal-oil.jpeg";
import mosquitoImg from "@/assets/mosquito-repellent.jpeg";
import dantamanjanImg from "@/assets/dantamanjan.jpeg";
import panchakamImg from "@/assets/panchakam.jpeg";
import shampooImg from "@/assets/shampoo.jpeg";
import bathPowderImg from "@/assets/bath-powder.jpeg";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Pooja Needs", "Body Care", "Healthy Diet"];

const products = [
  {
    name: "Natural Desi Ghee",
    price: "₹649",
    unit: "250ml",
    image: gheeImg,
    category: "Healthy Diet",
    desc: "Pure A2 cow ghee, bilona method. Rich aroma & taste.",
  },
  {
    name: "Raw Honey",
    price: "₹499",
    unit: "500ml",
    image: honeyImg,
    category: "Healthy Diet",
    desc: "Natural cold-extracted, non-GMO raw honey.",
  },
  {
    name: "Gau Sambrani Cups",
    price: "₹120",
    unit: "12 cups",
    image: sambraniImg,
    category: "Pooja Needs",
    desc: "Traditional sambrani cups for divine fragrance.",
  },
  {
    name: "Gaumaya Natural Dhoop",
    price: "₹30",
    unit: "108g",
    image: dhoopImg,
    category: "Pooja Needs",
    desc: "Rose-scented natural dhoop sticks from cow dung.",
  },
  {
    name: "Mosquito Repellent Cakes",
    price: "₹50",
    unit: "10 pcs",
    image: mosquitoImg,
    category: "Pooja Needs",
    desc: "Neem & cow dung based eco-friendly repellent.",
  },
  {
    name: "Amrutha Dhaara Oil",
    price: "₹100",
    unit: "10ml",
    image: oilImg,
    category: "Body Care",
    desc: "5-in-1 relief for cold, fever, joint pains & headache.",
  },
  {
    name: "Gau Dantamanjan",
    price: "₹150",
    unit: "",
    image: dantamanjanImg,
    category: "Body Care",
    desc: "Ayurvedic herbal tooth powder for strong gums & teeth.",
  },
  {
    name: "Shuddha Gau Panchakam",
    price: "₹35",
    unit: "100ml",
    image: panchakamImg,
    category: "Pooja Needs",
    desc: "Pure panchagavya for external use & pooja rituals.",
  },
  {
    name: "Shampoo Powder",
    price: "₹150",
    unit: "",
    image: shampooImg,
    category: "Body Care",
    desc: "Panchagavya herbal shampoo. Prevents itchy scalp & lice.",
  },
  {
    name: "Bath Powder (Sunnipindi)",
    price: "₹150",
    unit: "",
    image: bathPowderImg,
    category: "Body Care",
    desc: "Herbal bath powder with turmeric, neem & brahmi.",
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-saffron font-body font-semibold uppercase tracking-widest text-sm mb-2">
            Our Products
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Pure Desi Cow <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-body">
            Handcrafted with care from sacred desi cow ingredients. 100% natural, chemical-free.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2 font-body text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-xl bg-card ornament-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {product.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-foreground">{product.name}</h3>
                {product.unit && (
                  <p className="text-xs text-muted-foreground font-body">{product.unit}</p>
                )}
                <p className="mt-2 text-sm text-muted-foreground font-body line-clamp-2">
                  {product.desc}
                </p>
                <a
                  href={`https://wa.me/917032289893?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-saffron px-4 py-2.5 font-body text-sm font-bold text-foreground transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
