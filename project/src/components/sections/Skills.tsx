import { Reveal, SectionHeading } from '@/components/Reveal';
import { skillCategories } from '@/data/portfolio';
import { Brain, BarChart3, Code2, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  BarChart3,
  Code2,
  Database,
  Wrench,
};

const colorMap: Record<string, { bg: string; text: string; bar: string }> = {
  primary: { bg: 'bg-primary/20', text: 'text-primary', bar: 'from-primary to-blue-400' },
  secondary: { bg: 'bg-secondary/20', text: 'text-secondary', bar: 'from-secondary to-cyan-400' },
  accent: { bg: 'bg-accent/20', text: 'text-accent', bar: 'from-accent to-violet-400' },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="Technical Arsenal"
          subtitle="Technologies and tools I use to build intelligent, data-driven solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code2;
            const color = colorMap[category.color] || colorMap.primary;

            return (
              <Reveal key={category.title} delay={catIndex * 0.1}>
                <div className="glass rounded-2xl p-6 card-lift h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${color.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${color.text}`} />
                    </div>
                    <h3 className="font-semibold text-text">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-muted">{skill.name}</span>
                          <span className={`text-xs font-mono ${color.text}`}>{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800/50 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + skillIndex * 0.05, ease: 'easeOut' }}
                            className={`h-full rounded-full bg-gradient-to-r ${color.bar}`}
                            style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.4)' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
