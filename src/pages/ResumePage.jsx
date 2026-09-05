import { Download, FileText, Printer } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';

export default function ResumePage() {
  const { personal, resume, experience, education, skills, services } =
    PORTFOLIO_DATA;

  const printResume = () => window.print();

  return (
    <div className="space-y-6">
      <div className="no-print">
        <PageHeader
          icon={FileText}
          kicker="Interactive Resume Viewer"
          title={`${personal.name} — Resume`}
          description={`${resume.lastUpdated} · ${resume.version} · Save as PDF from the print dialog.`}
          actions={
            <div className="flex flex-wrap gap-2">
              <Button onClick={printResume}>
                <Download size={14} />
                Download PDF
              </Button>
              <Button variant="outline" onClick={printResume}>
                <Printer size={14} />
                Print
              </Button>
            </div>
          }
        />
      </div>

      <GlassCard padding="p-6 md:p-10" className="print-resume space-y-8">
        <header className="space-y-2 border-b border-line pb-6">
          <h2 className="text-3xl font-extrabold text-title">{personal.name}</h2>
          <p className="text-ink-secondary font-medium">{personal.title}</p>
          <p className="text-sm text-ink-secondary max-w-3xl">
            {personal.tagline}
          </p>
          <p className="text-xs font-mono text-ink-muted">
            {personal.email} · {personal.location} · {personal.timezone}
          </p>
        </header>

        <section className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-title">
            Summary
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed">
            {personal.bio}
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-title">
            Experience
          </h3>
          {experience.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <p className="font-semibold text-title">
                  {exp.role} — {exp.company}
                </p>
                <p className="text-xs font-mono text-ink-muted">{exp.period}</p>
              </div>
              <ul className="list-disc pl-5 text-sm text-ink-secondary space-y-1">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-title">
            Education
          </h3>
          {education.map((edu) => (
            <p key={edu.id} className="text-sm text-ink-secondary">
              <span className="font-semibold text-title">{edu.degree}</span> ·{' '}
              {edu.institution} · {edu.period}
            </p>
          ))}
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-title">
            Skills
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <Badge key={skill.name} variant="tech">
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-title">
            Services
          </h3>
          <p className="text-sm text-ink-secondary">
            {services.map((service) => service.title).join(' · ')}
          </p>
        </section>
      </GlassCard>
    </div>
  );
}
