const variants = {
  default: 'bg-app text-ink-secondary border-line',
  tech: 'bg-app text-ink-secondary border-line',
  success: 'bg-app text-ink border-line',
  info: 'bg-app text-ink-secondary border-line',
  active: 'bg-title/15 text-title border-title/25',
  deployed: 'bg-success/15 text-success border-success/25',
};

function statusVariant(status) {
  const key = status?.toLowerCase();
  if (key === 'active') return 'active';
  if (key === 'deployed') return 'deployed';
  return 'default';
}

export default function Badge({
  children,
  variant = 'default',
  status,
  className = '',
}) {
  const resolved = status ? statusVariant(status) : variant;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border ${variants[resolved] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}
