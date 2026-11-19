import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 30, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      <Reveal>
        <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-widest text-secondary uppercase mb-4">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === title.split(' ').length - 1 ? 'gradient-text' : ''}>
              {word}{' '}
            </span>
          ))}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="text-muted max-w-2xl mx-auto text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
