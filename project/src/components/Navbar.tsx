import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';
import { useScrollPosition, useActiveSection, useTheme } from '@/hooks/useScroll';

export function Navbar() {
  const { scrollY } = useScrollPosition();
  const activeSection = useActiveSection();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrolled = scrollY > 50;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2 cursor-hover group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
              CB
            </div>
            <span className="font-semibold text-text hidden sm:block">
              Chakir<span className="text-secondary">.dev</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`cursor-hover px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-secondary'
                    : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="cursor-hover p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-secondary" />
              ) : (
                <Moon className="w-4 h-4 text-primary" />
              )}
            </button>

            <div className="hidden md:flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-muted hover:text-text" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted hover:text-text" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="cursor-hover p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-muted hover:text-text" />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden cursor-hover p-2 rounded-lg glass"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-64 z-40 glass lg:hidden flex flex-col pt-24 px-4"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className={`cursor-hover text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-secondary bg-primary/10'
                    : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <div className="mt-auto flex gap-3 pb-8">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="cursor-hover p-2 glass rounded-lg">
                <Github className="w-4 h-4" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-hover p-2 glass rounded-lg">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${personal.email}`} className="cursor-hover p-2 glass rounded-lg">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
