import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const whatsappLink =
    "https://wa.me/917032289893?text=Hello%20I%20am%20interested%20in%20your%20products";

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-saffron font-body font-semibold uppercase tracking-widest text-sm mb-2">
            Contact Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron/15">
                <Phone className="h-5 w-5 text-saffron" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">Phone</h3>
                <a href="tel:+917032289893" className="text-muted-foreground font-body hover:text-primary">
                  +91-7032289893
                </a>
                <br />
                <a href="tel:+918074245577" className="text-muted-foreground font-body hover:text-primary">
                  +91-8074245577
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron/15">
                <Mail className="h-5 w-5 text-saffron" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">Email</h3>
                <a href="mailto:p.v.k.bhramar@gmail.com" className="text-muted-foreground font-body hover:text-primary">
                  p.v.k.bhramar@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron/15">
                <MapPin className="h-5 w-5 text-saffron" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">Location</h3>
                <p className="text-muted-foreground font-body">India</p>
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-body font-bold text-primary-foreground transition-transform hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-5 w-5" />
              Message on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-4 rounded-xl bg-background p-6 ornament-border"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              window.open(
                `https://wa.me/917032289893?text=${encodeURIComponent(`Hi, I'm ${name}. ${message}`)}`,
                "_blank"
              );
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-body font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
