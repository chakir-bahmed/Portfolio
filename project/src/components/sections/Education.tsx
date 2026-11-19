import { Reveal, SectionHeading } from '@/components/Reveal';
import { education } from '@/data/portfolio';
import { GraduationCap, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="My educational journey in computer science and data science."
        />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Reveal key={edu.degree} delay={index * 0.1}>
              <div className="glass rounded-2xl p-6 card-lift flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-text">{edu.degree}</h3>
                    <span className="text-xs font-mono text-secondary px-3 py-1 rounded-full bg-secondary/10">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
