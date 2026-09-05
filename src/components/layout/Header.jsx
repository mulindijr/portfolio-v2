import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  Sun,
  Moon,
  Search,
  Download,
  Sparkles,
  Clock,
  ChevronRight,
  Circle,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useApp } from '../../hooks/useApp';
import Tooltip from '../common/Tooltip';

export default function Header({ setMobileOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, toggleTheme, setCommandOpen } = useApp();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentNav = PORTFOLIO_DATA.navigation.find(
    (nav) => nav.path === location.pathname
  );
  const pageTitle = currentNav?.label ?? 'Overview';

  return (
    <header className="sticky top-0 z-20 h-16 border-b border-line bg-sidebar/90 backdrop-blur-md flex items-center justify-between px-4 md:px-6 no-print">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-xl text-ink-secondary hover:text-ink hover:bg-hover transition-colors"
          aria-label="Open navigation drawer"
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-2 text-xs md:text-sm font-medium">
          <span className="text-ink-muted font-mono flex items-center gap-1.5">
            <Sparkles size={14} />
            Console
          </span>
          <ChevronRight size={14} className="text-ink-muted" />
          <span className="text-title font-semibold tracking-wide">
            {pageTitle}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-line text-ink-secondary text-xs font-mono">
          <Circle size={8} className="fill-success text-success" />
          <span>{PORTFOLIO_DATA.personal.availabilityShort}</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface border border-line text-xs font-mono text-title">
          <Clock size={14} />
          <span>{timeStr || '--:--:--'}</span>
        </div>

        <Tooltip label="Open command palette">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface hover:bg-hover border border-line text-ink-secondary hover:text-ink text-xs transition-colors"
          >
            <Search size={14} />
            <span>Search...</span>
            <kbd className="px-1.5 py-0.5 rounded bg-app text-[10px] font-mono text-ink-muted border border-line">
              ⌘K
            </kbd>
          </button>
        </Tooltip>

        <Tooltip
          label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl text-ink-secondary hover:text-ink hover:bg-hover transition-colors"
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </Tooltip>

        <button
          type="button"
          onClick={() => navigate('/resume')}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cta text-cta-ink font-medium text-xs transition-opacity hover:opacity-90 active:scale-95"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Resume</span>
        </button>
      </div>
    </header>
  );
}
