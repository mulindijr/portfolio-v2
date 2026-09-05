import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Badge from '../components/common/Badge';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';

export default function SkillsPage() {
  const { skills, skillCategories } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? skills
        : skills.filter((skill) => skill.category === filter),
    [filter, skills]
  );

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Cpu}
        kicker="Tech Stack & Proficiency"
        title="Core technologies & tooling"
        description="Filter the catalog by domain. Bars reflect day-to-day fluency, not résumé inflation."
      />

      <div className="flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`filter-chip ${filter === category ? 'filter-chip-active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visible.map((skill) => (
          <GlassCard key={skill.name} hover className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-title">{skill.name}</h3>
                <p className="text-xs text-ink-muted mt-0.5">{skill.note}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono text-ink-muted">
                  {skill.level}%
                </p>
                <Badge>{skill.years} yrs</Badge>
              </div>
            </div>
            <div className="h-2 rounded-full bg-app overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-cta"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <Badge variant="tech">{skill.category}</Badge>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
