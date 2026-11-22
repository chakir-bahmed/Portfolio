import { useState } from 'react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { projects } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, Cpu, Bot, TrendingUp, MapPin } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Cpu, Bot, TrendingUp, MapPin };

const categories = ['All', 'Machine Learning', 'AI / LLM', 'Data Analytics'];

export function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of AI, machine learning, and data analytics projects I've built."
        />

        {/* Filter buttons */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-hover px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white glow-primary'
                    : 'glass text-muted hover:text-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const Icon = iconMap[project.icon] || Cpu;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`glass rounded-2xl overflow-hidden card-lift relative group ${project.featured ? 'lg:col-span-1' : ''}`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      <Star className="w-3 h-3 fill-accent" />
                      Featured
                    </div>
                  )}

                  {/* Banner */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>

                    {project.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Icon className="w-20 h-20 text-white/30" />
                      </motion.div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-mono text-secondary">{project.category}</span>
                    <h3 className="text-xl font-semibold text-text mt-2 mb-3">{project.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/50 text-muted font-mono">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-hover flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-hover px-4 py-2.5 rounded-xl glass text-text text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
