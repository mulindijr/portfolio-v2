import { Monitor, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';

export default function AboutPage() {
  const { personal, highlights, setup } = PORTFOLIO_DATA;

  return (
    <div className="space-y-6">
      <PageHeader
        icon={User}
        kicker="About Me"
        title="Background & engineering philosophy"
        description={personal.bio}
      />

      <GlassCard className="space-y-3">
        <h2 className="text-sm font-semibold text-title">Work philosophy</h2>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl">
          {personal.philosophy}
        </p>
      </GlassCard>

      <GlassCard className="space-y-5">
        <h2 className="text-sm font-semibold text-title">Career highlights</h2>
        <ol className="relative border-l border-line ml-2 space-y-6">
          {highlights.map((item) => (
            <li key={item.year} className="pl-6">
              <span className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-title ring-4 ring-surface" />
              <p className="text-[10px] font-mono text-ink-muted">
                {item.year}
              </p>
              <h3 className="font-semibold text-title">{item.title}</h3>
              <p className="text-sm text-ink-secondary mt-1">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </GlassCard>

      <GlassCard className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-title">
          <Monitor size={16} className="text-ink-muted" />
          Development setup
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries({
            IDE: setup.ide,
            OS: setup.os,
            Hardware: setup.hardware,
            Workflow: setup.workflow,
            Editor: setup.editor,
          }).map(([label, value]) => (
            <div
              key={label}
              className="p-3 rounded-xl bg-app border border-line"
            >
              <dt className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">
                {label}
              </dt>
              <dd className="text-sm text-ink mt-1">{value}</dd>
            </div>
          ))}
        </dl>
      </GlassCard>
    </div>
  );
}
