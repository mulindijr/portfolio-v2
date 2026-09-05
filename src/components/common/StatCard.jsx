import { TrendingUp } from 'lucide-react';
import GlassCard from './GlassCard';

export default function StatCard({ label, value, change, icon: Icon }) {
  return (
    <GlassCard hover className="group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="text-xs font-mono text-ink-muted uppercase tracking-wider font-medium">
          {label}
        </div>
        {Icon && (
          <span className="p-1.5 rounded-lg bg-app text-ink-secondary">
            <Icon size={16} />
          </span>
        )}
      </div>
      <div className="text-3xl font-extrabold text-ink">{value}</div>
      {change && (
        <div className="mt-2 text-xs text-ink-muted font-mono font-medium flex items-center gap-1">
          <TrendingUp size={12} />
          <span>{change}</span>
        </div>
      )}
    </GlassCard>
  );
}
