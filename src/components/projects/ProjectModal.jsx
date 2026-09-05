import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import Badge from '../common/Badge';
import Button from '../common/Button';
import Modal from '../common/Modal';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      title={project.title}
      size="xl"
    >
      <div className="space-y-5">
        <img
          src={project.image}
          alt=""
          className="w-full h-52 md:h-64 object-cover rounded-xl border border-line"
        />
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="info">{project.category}</Badge>
          <Badge status={project.status}>{project.status}</Badge>
          {Object.entries(project.metrics).map(([key, value]) => (
            <Badge key={key}>
              {key}: {value}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-ink-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Problem
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {project.problem}
            </p>
          </section>
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Solution
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {project.solution}
            </p>
          </section>
        </div>
        <section>
          <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Architecture
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.architecture.map((item) => (
              <li
                key={item}
                className="text-xs text-ink-secondary bg-app border border-line rounded-xl px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Key features
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-ink-secondary">
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {project.gallery?.length > 1 && (
          <section className="grid grid-cols-2 gap-3">
            {project.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-28 w-full object-cover rounded-xl border border-line"
              />
            ))}
          </section>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button href={project.demoUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={14} />
            Live demo
          </Button>
          <Button
            variant="outline"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={14} />
            Source
          </Button>
        </div>
      </div>
    </Modal>
  );
}
