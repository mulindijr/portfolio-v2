import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Cpu,
  ExternalLink,
  FileText,
  FolderKanban,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Mail,
  Moon,
  Search,
  Sun,
  User,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useApp } from '../../hooks/useApp';

const navIcons = {
  LayoutDashboard,
  User,
  Cpu,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Layers,
  Mail,
  FileText,
};

export default function CommandPalette() {
  const { commandOpen, setCommandOpen } = useApp();

  return createPortal(
    <AnimatePresence>
      {commandOpen && <PaletteDialog onClose={() => setCommandOpen(false)} />}
    </AnimatePresence>,
    document.body
  );
}

function PaletteDialog({ onClose }) {
  const navigate = useNavigate();
  const { toggleTheme, darkMode, copyText } = useApp();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(() => {
    const nav = PORTFOLIO_DATA.navigation.map((item) => ({
      id: `nav-${item.id}`,
      group: 'Navigate',
      label: item.label,
      hint: item.path,
      icon: navIcons[item.icon] || LayoutDashboard,
      run: () => navigate(item.path),
    }));

    const projects = PORTFOLIO_DATA.projects.map((project) => ({
      id: `proj-${project.id}`,
      group: 'Projects',
      label: project.title,
      hint: project.category,
      icon: FolderKanban,
      run: () => navigate(`/projects?id=${project.id}`),
    }));

    const actions = [
      {
        id: 'theme',
        group: 'Actions',
        label: darkMode ? 'Switch to light mode' : 'Switch to dark mode',
        hint: 'Theme',
        icon: darkMode ? Sun : Moon,
        run: () => toggleTheme(),
      },
      {
        id: 'copy-email',
        group: 'Actions',
        label: 'Copy email address',
        hint: PORTFOLIO_DATA.personal.email,
        icon: Mail,
        run: () =>
          copyText(PORTFOLIO_DATA.personal.email, 'Email copied to clipboard'),
      },
      {
        id: 'github',
        group: 'Actions',
        label: 'Open GitHub',
        hint: 'External',
        icon: GithubIcon,
        run: () =>
          window.open(PORTFOLIO_DATA.personal.socials.github, '_blank'),
      },
      {
        id: 'resume',
        group: 'Actions',
        label: 'Open resume viewer',
        hint: '/resume',
        icon: FileText,
        run: () => navigate('/resume'),
      },
    ];

    return [...nav, ...projects, ...actions];
  }, [copyText, darkMode, navigate, toggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const safeActive =
    filtered.length === 0 ? 0 : Math.min(active, filtered.length - 1);

  useEffect(() => {
    inputRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const run = (item) => {
    if (!item) return;
    onClose();
    item.run();
  };

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActive((i) => (i + 1) % Math.max(filtered.length, 1));
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActive(
          (i) =>
            (i - 1 + Math.max(filtered.length, 1)) %
            Math.max(filtered.length, 1)
        );
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        const item =
          filtered[Math.min(active, Math.max(filtered.length - 1, 0))];
        if (item) {
          onClose();
          item.run();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, filtered, onClose]);

  const groups = filtered.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  let runningIndex = -1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[75] flex items-start justify-center pt-[12vh] px-4"
    >
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-overlay backdrop-blur-sm"
        aria-label="Close command palette"
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        className="relative z-10 w-full max-w-xl rounded-2xl overflow-hidden border border-line bg-elevated shadow-2xl"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
          <Search size={16} className="text-ink-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            placeholder="Jump to a section, project, or action…"
            className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-muted outline-none"
          />
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface text-ink-muted border border-line">
            ESC
          </kbd>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-sm text-ink-muted text-center">
              No matches for “{query}”
            </p>
          )}
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className="mb-2">
              <p className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono text-ink-muted">
                {group}
              </p>
              {items.map((item) => {
                runningIndex += 1;
                const index = runningIndex;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onClick={() => run(item)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm ${
                      index === safeActive
                        ? 'bg-hover text-ink'
                        : 'text-ink-secondary'
                    }`}
                  >
                    <Icon size={16} className="flex-shrink-0" />
                    <span className="flex-1 truncate">{item.label}</span>
                    <span className="text-[10px] font-mono text-ink-muted flex items-center gap-1">
                      {item.hint}
                      {item.group === 'Actions' && item.id === 'github' && (
                        <ExternalLink size={10} />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
