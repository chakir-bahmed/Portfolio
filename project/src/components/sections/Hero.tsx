import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileDown, Sparkles } from 'lucide-react';
import { personal, typingRoles, stats } from '@/data/portfolio';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Particles } from '@/components/Particles';

export function Hero() {
  const typedText = useTypingEffect(typingRoles);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Chakir_Bahmed_Resume.pdf';
  link.download = 'Chakir_Bahmed_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Particles />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted">Available for opportunities</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">CHAKIR</span>
              <br />
              <span className="gradient-text">BAHMED</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl md:text-2xl text-muted font-mono h-8"
            >
              <span className="type-cursor">{typedText}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
            >
              {personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="cursor-hover group px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium glow-primary hover:scale-105 transition-transform flex items-center gap-2"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={downloadResume}
                className="cursor-hover px-6 py-3 rounded-xl glass text-text font-medium hover:bg-primary/20 transition-colors flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Resume
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="cursor-hover px-6 py-3 rounded-xl border border-secondary/40 text-secondary font-medium hover:bg-secondary/10 transition-colors"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="cursor-hover w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5 text-muted hover:text-text transition-colors" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-hover w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted hover:text-text transition-colors" />
              </a>
              <a href={`mailto:${personal.email}`} className="cursor-hover w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5 text-muted hover:text-text transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right: Profile card with stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-30 animate-pulse-glow" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-primary/20"
              />

{/* Profile Image */}
<div className="absolute inset-8 rounded-full overflow-hidden glass p-1">
  <img
    src="/favicon.jpg"
    alt="BAHMED CHAKIR"
    className="w-full h-full rounded-full object-cover object-center hover:scale-105 transition-transform duration-500"
  />
</div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 glass px-3 py-2 rounded-xl text-xs font-mono text-secondary"
              >
                Python
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 -left-4 glass px-3 py-2 rounded-xl text-xs font-mono text-accent"
              >
                LLM / RAG
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-2 right-8 glass px-3 py-2 rounded-xl text-xs font-mono text-primary"
              >
                ML Engineer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="glass card-lift rounded-2xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-muted mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}