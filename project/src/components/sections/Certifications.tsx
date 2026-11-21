import { Reveal, SectionHeading } from '@/components/Reveal';
import { certifications } from '@/data/portfolio';
import { Calendar, Building2, ExternalLink } from 'lucide-react';
import { SiNvidia, SiMongodb, SiKaggle } from 'react-icons/si';

export function Certifications() {
  const getLogo = (logo) => {
    switch (logo) {
      case 'nvidia':
        return <SiNvidia className="w-7 h-7 text-[#76B900]" />;

      case 'mongodb':
        return <SiMongodb className="w-7 h-7 text-[#47A248]" />;

  case 'ibm':
  return (
    <img
      src="/logos/IBM.png"
      alt="IBM"
      className="w-8 h-8 object-contain"
    />
  );


      case 'kaggle':
        return <SiKaggle className="w-7 h-7 text-[#20BEFF]" />;

      default:
        return (
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary to-secondary" />
        );
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
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
                {/* Glow Effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
                    {getLogo(cert.logo)}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-text leading-tight">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 text-sm text-accent">
                      <Building2 className="w-3.5 h-3.5" />
                      {cert.provider}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-8">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}