import { Award, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Badge from '../components/common/Badge';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';

export default function EducationPage() {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <div className="space-y-6">
      <PageHeader
        icon={GraduationCap}
        kicker="Academic Background"
        title="Education & credentials"
        description="Degrees, course certificates, and verified digital badges."
      />

      <div className="space-y-4">
        {education.map((edu) => (
          <GlassCard key={edu.id} className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-title">{edu.degree}</h3>
              <Badge variant="info">{edu.honors}</Badge>
            </div>
            <p className="text-xs text-ink-muted font-mono font-medium">
              {edu.institution} · {edu.period}
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {edu.details}
            </p>
          </GlassCard>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-title">
          <Award size={16} className="text-ink-muted" />
          Certifications
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <GlassCard key={cert.id} hover className="space-y-2">
              <Badge variant="success">{cert.credential}</Badge>
              <h3 className="font-semibold text-title">{cert.name}</h3>
              <p className="text-xs font-mono text-ink-muted">
                {cert.issuer} · {cert.year}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
