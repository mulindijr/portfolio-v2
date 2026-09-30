import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  User,
  Cpu,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Layers,
  Mail,
  FileText,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../common/BrandIcons';
import Avatar from '../common/Avatar';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const iconMap = {
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

export default function MobileNav({ open, setOpen }) {
  const { personal, navigation } = PORTFOLIO_DATA;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-overlay backdrop-blur-sm md:hidden"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-sidebar border-r border-line shadow-2xl flex flex-col md:hidden text-ink"
          >
            <div className="p-4 border-b border-line flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar name={personal.name} src={personal.avatar} size="md" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-ink">
                    {personal.name}
                  </span>
                  <span className="text-xs text-ink-muted font-mono">
                    {personal.consoleLabel}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-hover transition-colors"
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto px-3 py-2 space-y-1"
              aria-label="Mobile"
            >
              {navigation.map((item) => {
                const IconComponent = iconMap[item.icon] || LayoutDashboard;

                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                        isActive
                          ? 'bg-hover text-title font-semibold'
                          : 'text-title/80 hover:text-title hover:bg-hover font-medium'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent size={20} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-app text-ink-muted border border-line">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            <div className="p-4 border-t border-line flex items-center justify-around text-ink-muted">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-ink hover:bg-hover"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-ink hover:bg-hover"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-ink hover:bg-hover"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
