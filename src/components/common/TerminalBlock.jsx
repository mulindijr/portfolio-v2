import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export default function TerminalBlock({
  title = 'whoami',
  lines = [],
  className = '',
}) {
  const { addToast } = useApp();
  const [copied, setCopied] = useState(false);
  const text = lines.join('\n');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      addToast('Snippet copied');
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      addToast('Could not copy snippet', 'error');
    }
  };

  return (
    <div
      className={`rounded-xl overflow-hidden border border-line bg-app text-ink ${className}`}
    >
      <div className="flex items-center justify-between px-3 py-2 bg-hover border-b border-line">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[11px] font-mono text-ink-muted">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={copy}
          className="p-1 rounded text-ink-muted hover:text-ink"
          aria-label="Copy terminal snippet"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto">
        {lines.map((line, index) => (
          <div key={`${line}-${index}`}>
            {line.startsWith('$') ? (
              <>
                <span className="text-title">{line.slice(0, 1)}</span>
                <span className="text-title">{line.slice(1)}</span>
              </>
            ) : (
              <span className="text-ink">{line}</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
