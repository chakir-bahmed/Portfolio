import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScroll';
import { ArrowUp } from 'lucide-react';

export function ScrollProgress() {
  const { scrollProgress } = useScrollPosition();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-primary via-secondary to-accent"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

export function BackToTop() {
  const { scrollY } = useScrollPosition();

  if (scrollY < 500) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="cursor-hover fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary hover:scale-110 transition-transform"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </motion.button>
  );
}
