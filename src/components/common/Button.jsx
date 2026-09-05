import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-cta text-cta-ink hover:opacity-90',
  secondary: 'bg-hover text-ink hover:bg-surface',
  outline: 'border border-line text-ink hover:bg-hover',
  ghost: 'text-ink-secondary hover:bg-hover hover:text-ink',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  to,
  type = 'button',
  ...props
}) {
  const resolved = variant === 'glow' ? 'primary' : variant;
  const classes = `inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors active:scale-95 disabled:opacity-60 disabled:pointer-events-none ${variants[resolved]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
