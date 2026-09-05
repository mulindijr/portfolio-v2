import { CloudCog, Code2, Gauge, Layers, Network } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';

const icons = { Code2, Network, Gauge, CloudCog };

export default function ServicesPage() {
  const { services } = PORTFOLIO_DATA;

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Layers}
        kicker="Services & Offerings"
        title="Solutions & engineering services"
        description="Scoped engagements for product teams that need a dashboard, an API, or a cloud path to production."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = icons[service.icon] || Layers;
          return (
            <GlassCard key={service.id} hover className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-app text-ink border border-line">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-bold text-title">{service.title}</h3>
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.deliverables.map((item) => (
                  <Badge key={item} variant="tech">
                    {item}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>

      <GlassCard className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-sm text-ink-secondary">
          Need a scoped proposal? Send the problem, constraints, and timeline.
        </p>
        <Button to="/contact">Start a conversation</Button>
      </GlassCard>
    </div>
  );
}
