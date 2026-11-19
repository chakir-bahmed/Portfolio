import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal, navLinks } from '@/data/portfolio';

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-sm">
                CB
              </div>
              <span className="font-semibold text-text">Chakir Bahmed</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Data Science & AI Engineer building intelligent, data-driven solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text mb-3">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="cursor-hover text-sm text-muted hover:text-secondary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="cursor-hover w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4 text-muted hover:text-text" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-hover w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-muted hover:text-text" />
              </a>
              <a href={`mailto:${personal.email}`} className="cursor-hover w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Email">
                <Mail className="w-4 h-4 text-muted hover:text-text" />
              </a>
            </div>
            <p className="text-sm text-muted mt-4">{personal.location}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Chakir Bahmed. All rights reserved.
          </p>
          <p className="text-sm text-muted flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
