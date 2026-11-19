import { Reveal, SectionHeading } from '@/components/Reveal';
import { certifications } from '@/data/portfolio';
import { Award, BadgeCheck, Calendar, Building2 } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Credentials"
          subtitle="Certifications that validate my expertise in data science and AI."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.1}>
              <div className="glass rounded-2xl p-6 card-lift h-full relative overflow-hidden group">
                {/* Glow accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text leading-tight">{cert.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-accent">
                      <Building2 className="w-3.5 h-3.5" />
                      {cert.provider}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">{cert.description}</p>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary font-mono">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    {cert.credentialId}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
