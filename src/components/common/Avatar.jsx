export default function Avatar({ name, src, size = 'md', className = '' }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-20 h-20 text-2xl',
  };

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${sizes[size]} rounded-xl object-cover ring-1 ring-line ${className}`}
      />
    );
  }

  return (
    <div
      aria-hidden={!name}
      className={`${sizes[size]} rounded-xl ring-1 ring-line bg-cta text-cta-ink font-bold flex items-center justify-center ${className}`}
    >
      {initials || 'BM'}
    </div>
  );
}
