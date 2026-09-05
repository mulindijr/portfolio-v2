import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLink, FolderKanban } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import Badge from '../components/common/Badge';
import GlassCard from '../components/common/GlassCard';
import PageHeader from '../components/common/PageHeader';
import ProjectModal from '../components/projects/ProjectModal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ProjectsPage() {
  const { projects, projectFilters } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('All');
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get('id');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects]
  );

  const active = projects.find((project) => project.id === activeId) || null;

  const openProject = (id) => {
    setSearchParams({ id });
  };

  const closeProject = () => {
    setSearchParams({});
  };

  return (
    <div className="space-y-6">
      <PageHeader
        icon={FolderKanban}
        kicker="Project Registry"
        title="Featured engineering projects"
        description="Filter the repository, then open a card for architecture notes, features, and links."
      />

      <div className="flex flex-wrap gap-2">
        {projectFilters.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`filter-chip ${filter === category ? 'filter-chip-active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project) => (
          <GlassCard
            key={project.id}
            hover
            padding="p-0"
            className="overflow-hidden flex flex-col"
          >
            <button
              type="button"
              onClick={() => openProject(project.id)}
              className="text-left"
            >
              <img
                src={project.image}
                alt=""
                className="h-40 w-full object-cover"
              />
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="tech">{project.category}</Badge>
                  <Badge status={project.status}>{project.status}</Badge>
                </div>
                <h3 className="text-lg font-bold text-title">{project.title}</h3>
                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </button>
            <div className="px-5 pb-5 mt-auto flex items-center gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs quiet-link flex items-center gap-1 font-mono font-medium"
              >
                <ExternalLink size={12} /> Live demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-ink-muted hover:text-ink flex items-center gap-1 font-mono"
              >
                <GithubIcon size={12} /> Source
              </a>
            </div>
          </GlassCard>
        ))}
      </div>

      <ProjectModal project={active} onClose={closeProject} />
    </div>
  );
}
