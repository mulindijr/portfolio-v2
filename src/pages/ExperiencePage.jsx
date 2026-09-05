import { useState } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Badge from '../components/common/Badge';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';

export default function ExperiencePage() {
  const { experience } = PORTFOLIO_DATA;
  const [openId, setOpenId] = useState(experience[0]?.id);

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Briefcase}
        kicker="Career Timeline"
        title="Professional experience"
        description="Expand a role for highlights and the stack used on that team."
      />

      <div className="relative border-l border-line ml-3 space-y-4">
        {experience.map((exp) => {
          const expanded = openId === exp.id;
          return (
            <article key={exp.id} className="pl-6">
              <span className="absolute -left-1.5 mt-6 w-3 h-3 rounded-full bg-title ring-4 ring-sidebar" />
              <GlassCard hover padding="p-0">
                <button
                  type="button"
                  onClick={() => setOpenId(expanded ? null : exp.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-3"
                  aria-expanded={expanded}
                >
                  <div>
                    <h3 className="text-lg font-bold text-title">
                      {exp.role}{' '}
                      <span className="text-ink-secondary">
                        @ {exp.company}
                      </span>
                    </h3>
                    <p className="text-xs font-mono text-ink-muted mt-1">
                      {exp.period} · {exp.location} · {exp.type}
                    </p>
                    <p className="text-sm text-ink-secondary mt-2">
                      {exp.description}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-ink-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
                {expanded && (
                  <div className="px-5 pb-5 space-y-3">
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink-secondary">
                      {exp.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="tech">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            </article>
          );
        })}
      </div>
    </div>
  );
}
