import { Link } from 'react-router-dom';
import {
  Activity,
  CalendarCheck,
  Circle,
  FileText,
  GitCommitHorizontal,
  HeartHandshake,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import StatCard from '../components/common/StatCard';
import TerminalBlock from '../components/common/TerminalBlock';
import { useApp } from '../hooks/useApp';

const statIcons = {
  CalendarCheck,
  Rocket,
  GitCommitHorizontal,
  HeartHandshake,
};

export default function OverviewPage() {
  const { personal, stats, quickTools, recentActivity, projects } =
    PORTFOLIO_DATA;
  const { copyText } = useApp();
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="space-y-6">
      <GlassCard padding="p-0" className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-64 xl:w-72 flex-shrink-0">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="w-full h-72 lg:h-full object-cover object-top"
            />
          </div>
          <div className="flex-1 space-y-3 min-w-0 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-app border border-line text-ink-secondary text-xs font-mono font-medium">
              <Sparkles size={14} />
              <span>Developer Control Center</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-title tracking-tight">
                {personal.name}
              </h1>
              <p className="text-ink-secondary font-medium mt-1">
                {personal.title}
              </p>
            </div>
            <p className="text-ink-secondary text-sm md:text-base max-w-2xl leading-relaxed">
              {personal.bio}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Circle size={8} className="fill-success text-success" />
                {personal.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button to="/resume">
                <FileText size={14} />
                View resume
              </Button>
              <Button variant="outline" to="/contact">
                <Mail size={14} />
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} icon={statIcons[stat.icon]} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="space-y-4">
          <h2 className="text-sm font-semibold text-title">System information</h2>
          <TerminalBlock
            title="console — whoami"
            lines={[
              '$ whoami',
              personal.name,
              '$ role',
              personal.title,
              '$ location',
              personal.location,
              '$ status',
              personal.status,
            ]}
          />
        </GlassCard>

        <GlassCard className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-title">
              Tech stack matrix
            </h2>
            <Link to="/skills" className="text-xs font-mono quiet-link">
              Full catalog
            </Link>
          </div>
          <div className="space-y-3">
            {quickTools.map((tool) => (
              <div key={tool.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-ink">{tool.name}</span>
                  <span className="font-mono text-ink-muted">
                    {tool.level}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-app overflow-hidden">
                  <div
                    className="h-full rounded-full bg-cta"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-title">Featured projects</h2>
          <Link to="/projects" className="text-xs font-mono quiet-link">
            View registry
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project) => (
            <Link key={project.id} to={`/projects?id=${project.id}`}>
              <GlassCard hover padding="p-0" className="overflow-hidden h-full">
                <img
                  src={project.image}
                  alt=""
                  className="h-32 w-full object-cover"
                />
                <div className="p-4 space-y-2">
                  <Badge variant="tech">{project.category}</Badge>
                  <h3 className="font-bold text-title">{project.title}</h3>
                  <p className="text-xs text-ink-secondary line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <span
                        key={key}
                        className="text-[10px] font-mono text-ink-muted"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-title">
            <Activity size={16} className="text-ink-muted" />
            Activity feed
          </div>
          <ol className="space-y-3">
            {recentActivity.map((item) => (
              <li
                key={item.id}
                className="flex gap-3 p-3 rounded-xl bg-app border border-line"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-title" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <Badge variant="info">{item.badge}</Badge>
                  </div>
                  <p className="text-xs text-ink-muted mt-1">{item.details}</p>
                  <p className="text-[10px] font-mono text-ink-muted mt-1">
                    {item.timestamp}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </GlassCard>

        <GlassCard className="space-y-4">
          <h2 className="text-sm font-semibold text-title">Quick contact</h2>
          <p className="text-sm text-ink-secondary">
            Have a role, a system that needs hardening, or a console to design?
            Drop a note — I typically reply within one business day.
          </p>
          <div className="text-xs font-mono p-3 rounded-xl bg-app border border-line">
            {personal.email}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              onClick={() =>
                copyText(personal.email, 'Email copied to clipboard')
              }
            >
              Copy email
            </Button>
            <Button variant="outline" to="/contact">
              Open workspace
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
