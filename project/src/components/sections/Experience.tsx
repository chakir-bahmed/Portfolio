import { Reveal, SectionHeading } from '@/components/Reveal';
import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="My Journey"
          subtitle="Professional projects and engineering experiences building AI and data solutions."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={exp.role} delay={index * 0.1}>
                <div className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass rounded-2xl p-6 card-lift"
                    >
                      <span className="text-xs font-mono text-secondary">{exp.period}</span>
                      <h3 className="text-lg font-semibold text-text mt-2">{exp.role}</h3>
                      <p className="text-sm text-accent mb-3">{exp.org}</p>
                      <p className="text-sm text-muted mb-4 leading-relaxed">{exp.description}</p>

                      <div className="space-y-1.5 mb-4">
                        {exp.achievements.map((a) => (
                          <div key={a} className="flex items-start gap-2 text-sm text-muted">
                            <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            {a}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
