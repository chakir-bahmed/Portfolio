import { Reveal, SectionHeading } from '@/components/Reveal';
import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="My Journey"
          subtitle="Professional projects and engineering experiences building AI and data solutions."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Reveal key={exp.role} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-3xl p-8 card-lift border border-white/5"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text">
                          {exp.role}
                        </h3>

                        <p className="text-accent font-medium">
                          {exp.org}
                        </p>
                      </div>

                      <span className="w-fit text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-muted leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="grid gap-3 mb-6">
                      {exp.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}