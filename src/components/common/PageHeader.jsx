import GlassCard from './GlassCard';

export default function PageHeader({
  icon: Icon,
  kicker,
  title,
  description,
  actions,
}) {
  return (
    <GlassCard padding="p-6 md:p-8" className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="space-y-2 min-w-0">
          <div className="kicker">
            {Icon && <Icon size={16} />}
            <span>{kicker}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-title tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm text-ink-secondary max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {actions ? <div className="flex-shrink-0">{actions}</div> : null}
      </div>
    </GlassCard>
  );
}
