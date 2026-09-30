import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
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
  ChevronLeft,
  ChevronRight,
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

export default function Sidebar({ collapsed, setCollapsed }) {
  const { personal, navigation } = PORTFOLIO_DATA;
  const [tip, setTip] = useState(null);
  const socials = [
    { label: 'GitHub', href: personal.socials.github, icon: GithubIcon },
    { label: 'LinkedIn', href: personal.socials.linkedin, icon: LinkedinIcon },
    { label: 'Twitter / X', href: personal.socials.twitter, icon: TwitterIcon },
  ];

  const showTip = (label, event) => {
    if (!collapsed) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTip({
      label,
      x: rect.right + 10,
      y: rect.top + rect.height / 2,
    });
  };

  const hideTip = () => setTip(null);

  return (
    <aside
      className={`hidden md:flex flex-col min-h-0 fixed top-0 left-0 bottom-0 z-30 transition-all duration-300 ease-in-out border-r border-line bg-sidebar no-print ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-40 w-7 h-7 rounded-full bg-surface border border-line text-ink-secondary hover:text-ink hover:bg-hover flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cta cursor-pointer"
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div
        className={`flex-shrink-0 p-4 border-b border-line flex items-center ${
          collapsed ? 'justify-center' : 'justify-start'
        }`}
      >
        <div
          className={`flex items-center gap-3 overflow-hidden ${collapsed ? '' : 'min-w-0'}`}
        >
          <div className="relative flex-shrink-0">
            <Avatar name={personal.name} src={personal.avatar} size="md" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full ring-2 ring-sidebar" />
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-sm text-ink truncate">
                {personal.name}
              </span>
              <span className="text-xs text-ink-muted font-mono truncate">
                {personal.consoleLabel}
              </span>
            </div>
          )}
        </div>
      </div>

      <nav
        className={`flex-1 min-h-0 overflow-x-hidden overflow-y-auto py-2 space-y-1 ${collapsed ? 'px-1' : 'px-3'}`}
        aria-label="Primary"
      >
        {navigation.map((item) => {
          const IconComponent = iconMap[item.icon] || LayoutDashboard;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              onMouseEnter={(event) => showTip(item.label, event)}
              onMouseLeave={hideTip}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2.5 lg:py-3 rounded-xl text-sm lg:text-base transition-colors duration-200 ${
                  isActive
                    ? 'bg-hover text-title font-semibold'
                    : 'text-title/80 hover:text-title hover:bg-hover font-medium'
                } ${collapsed ? 'justify-center px-0' : 'px-3.5'}`
              }
            >
              <IconComponent size={21} className="flex-shrink-0" />
              {!collapsed && (
                <div className="flex items-center justify-between flex-1 min-w-0">
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-app text-ink-muted border border-line">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div
        className={`flex-shrink-0 flex items-center justify-center border-t border-line text-ink-muted ${
          collapsed ? 'gap-0.5 px-1 py-2' : 'gap-1 p-3'
        }`}
      >
        {socials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={(event) => showTip(item.label, event)}
              onMouseLeave={hideTip}
              className={`rounded-lg hover:text-ink hover:bg-hover transition-colors ${collapsed ? 'p-1' : 'p-2'}`}
            >
              <Icon size={collapsed ? 14 : 18} />
            </a>
          );
        })}
      </div>

      {tip &&
        createPortal(
          <div
            role="tooltip"
            className="fixed z-[80] px-2.5 py-1.5 rounded-lg bg-cta text-cta-ink text-xs whitespace-nowrap shadow-lg pointer-events-none"
            style={{ left: tip.x, top: tip.y, transform: 'translateY(-50%)' }}
          >
            {tip.label}
          </div>,
          document.body
        )}
    </aside>
  );
}
