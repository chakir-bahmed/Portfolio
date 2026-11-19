import { Reveal, SectionHeading } from '@/components/Reveal';
import { personal } from '@/data/portfolio';
import { CheckCircle2, Target, Rocket, MapPin, Phone, Languages } from 'lucide-react';
import { languages } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me"
          subtitle="A passionate AI engineer turning complex data into intelligent solutions."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="glass rounded-2xl p-8 card-lift">
                <h3 className="text-xl font-semibold text-text mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Professional Biography
                </h3>
                <p className="text-muted leading-relaxed text-lg">{personal.bio}</p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              <Reveal delay={0.1}>
                <div className="glass rounded-2xl p-6 card-lift h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-text">Key Strengths</h4>
                  </div>
                  <ul className="space-y-2">
                    {personal.strengths.map((s) => (
                      <li key={s} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-secondary mt-1">▹</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="glass rounded-2xl p-6 card-lift h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text">Career Goals</h4>
                  </div>
                  <ul className="space-y-2">
                    {personal.goals.map((g) => (
                      <li key={g} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Side card */}
          <div className="space-y-6">
            <Reveal delay={0.15}>
              <div className="glass rounded-2xl p-6 card-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-text">Quick Info</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {personal.location}
                  </div>
                  <div className="flex items-center gap-3 text-muted">
                    <Phone className="w-4 h-4 text-secondary" />
                    {personal.phone}
                  </div>
                  <div className="flex items-center gap-3 text-muted">
                    <Languages className="w-4 h-4 text-secondary" />
                    Arabic, French, English, German
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="glass rounded-2xl p-6 card-lift">
                <h4 className="font-semibold text-text mb-4">Languages</h4>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <span className="text-sm text-muted">{lang.name}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-mono">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
