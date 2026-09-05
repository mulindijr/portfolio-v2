import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CircleAlert, FolderKanban, LayoutDashboard, Mail } from 'lucide-react';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';
import TerminalBlock from '../components/common/TerminalBlock';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function NotFoundPage() {
  const { pathname } = useLocation();
  const { personal, navigation } = PORTFOLIO_DATA;
  const routes = navigation.map((item) => item.path).join('  ');

  useEffect(() => {
    const previous = document.title;
    document.title = `404 | ${personal.name}`;
    return () => {
      document.title = previous;
    };
  }, [personal.name]);

  return (
    <div className="space-y-6">
      <PageHeader
        icon={CircleAlert}
        kicker="Route error"
        title="404 — path not found"
        description="This path is not in the console registry. Return to the dashboard or jump to a known route."
      />

      <TerminalBlock
        title="console — 404"
        lines={[
          `$ ls ${pathname}`,
          `ls: cannot access '${pathname}': No such file or directory`,
          '$ echo $STATUS',
          '404 NOT_FOUND',
          '$ ls /',
          routes,
          '$ cd /',
        ]}
      />

      <GlassCard className="flex flex-wrap gap-2">
        <Button to="/">
          <LayoutDashboard size={14} />
          Dashboard
        </Button>
        <Button variant="outline" to="/projects">
          <FolderKanban size={14} />
          Projects
        </Button>
        <Button variant="outline" to="/contact">
          <Mail size={14} />
          Contact
        </Button>
      </GlassCard>
    </div>
  );
}
