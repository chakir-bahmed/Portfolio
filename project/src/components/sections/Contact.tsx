import { useState } from 'react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { personal } from '@/data/portfolio';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const contactCards = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/chakir-bahmed', href: personal.linkedin },
    { icon: Github, label: 'GitHub', value: 'chakir-bahmed', href: personal.github },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card, i) => {
              const Wrapper = card.href ? 'a' : 'div';
              return (
                <Reveal key={card.label} delay={i * 0.08}>
                  <Wrapper
                    {...(card.href ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`cursor-hover flex items-center gap-4 glass rounded-2xl p-5 card-lift ${card.href ? 'hover:bg-primary/10 transition-colors' : ''}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted font-mono uppercase tracking-wider">{card.label}</div>
                      <div className="text-text font-medium text-sm">{card.value}</div>
                    </div>
                  </Wrapper>
                </Reveal>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                <div>
                  <label className="text-sm text-muted mb-2 block">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-text placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm text-muted mb-2 block">Your Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-text placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-sm text-muted mb-2 block">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-text placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="cursor-hover w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center justify-center gap-2 glow-primary hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-secondary text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Opening your email client... Thank you for reaching out!
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
