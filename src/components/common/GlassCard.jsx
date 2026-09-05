export default function GlassCard({
  children,
  className = '',
  hover = false,
  padding = 'p-5',
  as: Tag = 'div',
}) {
  return (
    <Tag
      className={`rounded-2xl bg-surface border border-line ${padding} ${
        hover ? 'transition-colors duration-200 hover:bg-hover' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
