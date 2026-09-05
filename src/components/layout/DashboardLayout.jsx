import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNav from './MobileNav';
import PageTransition from '../common/PageTransition';
import CommandPalette from '../common/CommandPalette';
import ToastStack from '../common/Toast';

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sidebar text-ink relative flex flex-col transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[90] focus:px-3 focus:py-2 focus:rounded-lg focus:bg-cta focus:text-cta-ink"
      >
        Skip to content
      </a>

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <MobileNav open={mobileOpen} setOpen={setMobileOpen} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? 'md:pl-20' : 'md:pl-64'
        }`}
      >
        <Header setMobileOpen={setMobileOpen} />
        <main
          id="main-content"
          className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl w-full mx-auto"
        >
          <PageTransition />
        </main>
      </div>

      <CommandPalette />
      <ToastStack />
    </div>
  );
}
