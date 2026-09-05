export default function Tooltip({ label, children, side = 'bottom' }) {
  const pos =
    side === 'top'
      ? 'bottom-full mb-2'
      : side === 'left'
        ? 'right-full mr-2'
        : side === 'right'
          ? 'left-full ml-2'
          : 'top-full mt-2';

  return (
    <span className="relative inline-flex group/tip">
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute ${pos} left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-cta text-cta-ink text-xs border border-line shadow-lg opacity-0 group-hover/tip:opacity-100 group-focus-within/tip:opacity-100 transition-opacity z-50`}
      >
        {label}
      </span>
    </span>
  );
}
