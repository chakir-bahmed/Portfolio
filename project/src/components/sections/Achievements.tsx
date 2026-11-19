import { Reveal, SectionHeading } from '@/components/Reveal';
import { achievements } from '@/data/portfolio';
import { Database, Target, TrendingUp, Brain, Languages, Sparkles, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Database,
  Target,
  TrendingUp,
  Brain,
  Languages,
  Sparkles,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Achievements"
          title="Notable Accomplishments"
          subtitle="Key milestones and impact across my data science and AI projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="glass rounded-2xl p-6 card-lift h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
