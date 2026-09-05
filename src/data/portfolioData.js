export const PORTFOLIO_DATA = {
  personal: {
    name: 'Brian Mulindi',
    title: 'Full-Stack Developer & Cloud Architect',
    tagline:
      'Building high-throughput web systems, resilient APIs, and intuitive user interfaces.',
    status: 'Available for remote roles & consulting',
    statusType: 'available',
    availabilityShort: 'Available for work',
    consoleLabel: 'Console v2.4',
    location: 'Nairobi, Kenya (UTC+3)',
    timezone: 'UTC+3 (EAT)',
    timeZoneId: 'Africa/Nairobi',
    email: 'mulindijrn@gmail.com',
    avatar: '/images/portrait.jpg',
    bio: 'Software engineer with 7+ years of experience designing scalable web applications, distributed backend services, and modern cloud architecture. Passionate about sleek dashboard UI design, clean code, and developer tooling.',
    philosophy:
      'Ship systems that are observable, boring in production, and delightful at the edges. Prefer small, well-owned services, typed contracts, and interfaces that feel like a control room — not a brochure.',
    socials: {
      github: 'https://github.com/mulindijr',
      linkedin: 'https://linkedin.com/in/mulindijr',
      twitter: 'https://x.com/mulindijr',
      email: 'mailto:mulindijrn@gmail.com',
    },
  },

  resume: {
    version: 'v2026.08',
    lastUpdated: 'August 2026',
    filename: 'Brian-Mulindi-Resume.pdf',
  },

  navigation: [
    {
      id: 'overview',
      label: 'Dashboard',
      path: '/',
      icon: 'LayoutDashboard',
    },
    { id: 'about', label: 'About Me', path: '/about', icon: 'User' },
    { id: 'skills', label: 'Skills & Stack', path: '/skills', icon: 'Cpu' },
    {
      id: 'projects',
      label: 'Projects',
      path: '/projects',
      icon: 'FolderKanban',
    },
    {
      id: 'experience',
      label: 'Experience',
      path: '/experience',
      icon: 'Briefcase',
    },
    {
      id: 'education',
      label: 'Education',
      path: '/education',
      icon: 'GraduationCap',
    },
    { id: 'services', label: 'Services', path: '/services', icon: 'Layers' },
    { id: 'contact', label: 'Contact', path: '/contact', icon: 'Mail' },
    {
      id: 'resume',
      label: 'Resume / CV',
      path: '/resume',
      icon: 'FileText',
      badge: 'PDF',
    },
  ],

  stats: [
    {
      label: 'Years Experience',
      value: '7+',
      change: '+2 yrs lead roles',
      trend: 'up',
      color: 'cyan',
      icon: 'CalendarCheck',
    },
    {
      label: 'Projects Completed',
      value: '32',
      change: '100% uptime SLA',
      trend: 'up',
      color: 'emerald',
      icon: 'Rocket',
    },
    {
      label: 'GitHub Commits',
      value: '2,480+',
      change: 'This year',
      trend: 'up',
      color: 'indigo',
      icon: 'GitCommitHorizontal',
    },
    {
      label: 'Client Satisfaction',
      value: '99.4%',
      change: '5/5 star rating',
      trend: 'up',
      color: 'violet',
      icon: 'HeartHandshake',
    },
  ],

  quickTools: [
    { name: 'React 19 / Next.js', category: 'Frontend', level: 95 },
    { name: 'TypeScript / Node.js', category: 'Backend', level: 92 },
    { name: 'Python / FastAPI', category: 'Backend', level: 88 },
    { name: 'Docker / Kubernetes', category: 'DevOps', level: 85 },
    { name: 'PostgreSQL / Redis', category: 'Database', level: 90 },
    { name: 'AWS & Cloudflare', category: 'Cloud', level: 87 },
  ],

  skillCategories: [
    'All',
    'Frontend',
    'Backend & APIs',
    'Cloud & DevOps',
    'Database & Tools',
  ],

  skills: [
    {
      name: 'React',
      category: 'Frontend',
      level: 96,
      years: 6,
      note: 'Design systems, concurrent UI',
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      level: 94,
      years: 5,
      note: 'Typed contracts across the stack',
    },
    {
      name: 'Next.js / Vite',
      category: 'Frontend',
      level: 90,
      years: 4,
      note: 'SSR, islands, high-perf builds',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 93,
      years: 4,
      note: 'Token-driven dashboard UI',
    },
    {
      name: 'Node.js',
      category: 'Backend & APIs',
      level: 92,
      years: 6,
      note: 'Services, workers, gateways',
    },
    {
      name: 'Python / FastAPI',
      category: 'Backend & APIs',
      level: 88,
      years: 4,
      note: 'High-throughput APIs',
    },
    {
      name: 'GraphQL',
      category: 'Backend & APIs',
      level: 84,
      years: 3,
      note: 'Schema design & caching',
    },
    {
      name: 'REST / Webhooks',
      category: 'Backend & APIs',
      level: 95,
      years: 7,
      note: 'Idempotent, versioned APIs',
    },
    {
      name: 'AWS',
      category: 'Cloud & DevOps',
      level: 87,
      years: 5,
      note: 'ECS, Lambda, RDS, CloudFront',
    },
    {
      name: 'Docker / Kubernetes',
      category: 'Cloud & DevOps',
      level: 85,
      years: 4,
      note: 'Zero-downtime rollouts',
    },
    {
      name: 'CI/CD',
      category: 'Cloud & DevOps',
      level: 90,
      years: 5,
      note: 'GitHub Actions, preview envs',
    },
    {
      name: 'Observability',
      category: 'Cloud & DevOps',
      level: 82,
      years: 3,
      note: 'Metrics, traces, alert hygiene',
    },
    {
      name: 'PostgreSQL',
      category: 'Database & Tools',
      level: 91,
      years: 6,
      note: 'Indexes, migrations, RLS',
    },
    {
      name: 'Redis',
      category: 'Database & Tools',
      level: 88,
      years: 4,
      note: 'Caches, locks, streams',
    },
    {
      name: 'Git / GitHub',
      category: 'Database & Tools',
      level: 96,
      years: 7,
      note: 'Reviews, trunk-based flow',
    },
    {
      name: 'Linux / Shell',
      category: 'Database & Tools',
      level: 86,
      years: 7,
      note: 'tmux, systemd, debugging',
    },
  ],

  setup: {
    ide: 'Cursor / VS Code',
    os: 'Ubuntu 24.04 LTS / Windows (WSL2)',
    hardware: 'Custom Linux workstation · 32GB RAM',
    workflow: 'Git, Linear, Docker, tmux, GitHub Actions',
    editor: 'Vim bindings · ESLint + Prettier · Oxlint',
  },

  highlights: [
    {
      year: '2026',
      title: 'Platform lead, observability console',
      description:
        'Shipped a multi-cloud control plane used by 15k+ operators with 99.99% uptime.',
    },
    {
      year: '2024',
      title: 'Payments infrastructure at scale',
      description:
        'Designed a ledger and fraud pipeline processing thousands of TPS.',
    },
    {
      year: '2022',
      title: 'Design-system migration',
      description:
        'Moved a monolith frontend to a tokenized React system; cut load time 65%.',
    },
    {
      year: '2019',
      title: 'Entered product engineering',
      description:
        'Joined a fintech studio building real-time dashboards and APIs.',
    },
  ],

  recentActivity: [
    {
      id: 1,
      type: 'deploy',
      title: 'Shipped Realtime Analytics Dashboard v2.4',
      timestamp: '2 hours ago',
      details: 'Deployed to AWS ECS cluster with zero downtime.',
      badge: 'Production',
      color: 'emerald',
    },
    {
      id: 2,
      type: 'commit',
      title: 'Optimized GraphQL query execution time by 42%',
      timestamp: 'Yesterday',
      details: 'Implemented Redis response caching strategy.',
      badge: 'Backend',
      color: 'cyan',
    },
    {
      id: 3,
      type: 'release',
      title: 'Published open-source UI components library',
      timestamp: '3 days ago',
      details: 'Reached 1,200+ stars on GitHub.',
      badge: 'Open Source',
      color: 'indigo',
    },
    {
      id: 4,
      type: 'commit',
      title: 'Hardened CI preview environments',
      timestamp: '5 days ago',
      details: 'Ephemeral stacks now tear down automatically after review.',
      badge: 'DevOps',
      color: 'violet',
    },
  ],

  projectFilters: [
    'All',
    'Full-Stack',
    'Frontend',
    'Backend/API',
    'Cloud/DevOps',
  ],

  projects: [
    {
      id: 'nexus-cloud',
      title: 'NexusCloud Console',
      category: 'Full-Stack',
      status: 'Deployed',
      shortDescription:
        'Enterprise multi-cloud orchestration and observability console.',
      description:
        'A centralized dashboard for monitoring Kubernetes clusters, server metrics, microservices health, and automated CI/CD pipeline deployments across AWS, GCP, and Azure.',
      problem:
        'Ops teams were hopping between three cloud consoles and a pile of Grafana boards with no shared language for incidents.',
      solution:
        'Built a single control plane with live cluster health, deploy pipelines, and role-aware runbooks on a typed GraphQL API.',
      architecture: [
        'React 19 dashboard with streaming telemetry panels',
        'Node.js + GraphQL federation over cloud adapters',
        'ECS/Fargate workers for inventory sync',
        'Redis + Postgres for live state and audit logs',
      ],
      features: [
        'Multi-cloud inventory in one viewport',
        'Zero-downtime deploy orchestration',
        'SLO burn-rate alerts',
        'Audit trail for every mutate action',
      ],
      tech: [
        'React 19',
        'TypeScript',
        'Node.js',
        'GraphQL',
        'Tailwind CSS',
        'Docker',
        'AWS',
      ],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      ],
      demoUrl: 'https://example.com/nexus',
      githubUrl: 'https://github.com/mulindijr/nexus-cloud',
      featured: true,
      metrics: { uptime: '99.99%', users: '15k+', latency: '18ms' },
    },
    {
      id: 'hyper-pay',
      title: 'HyperPay Fintech Gateway',
      category: 'Backend/API',
      status: 'Active',
      shortDescription:
        'High-throughput real-time payment gateway and fraud detection API.',
      description:
        'Engineered scalable payment processing microservices supporting webhooks, Stripe integration, sub-second ledger reconciliation, and automated fraud score flagging.',
      problem:
        'Peak-hour payment spikes caused ledger drift and delayed webhook delivery to merchants.',
      solution:
        'Split ingest, scoring, and settlement into Kafka-backed services with idempotent keys and Redis locks.',
      architecture: [
        'FastAPI + Node.js edge adapters',
        'Kafka topics for authorize / capture / refund',
        'Postgres ledger with append-only entries',
        'Redis for idempotency and fraud feature cache',
      ],
      features: [
        '3,200 TPS sustained throughput',
        'Webhook retry with exponential backoff',
        'Fraud scoring under 40ms p95',
        'Double-spend prevention locks',
      ],
      tech: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
      image:
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      ],
      demoUrl: 'https://example.com/hyperpay',
      githubUrl: 'https://github.com/mulindijr/hyper-pay',
      featured: true,
      metrics: { volume: '$45M/mo', tps: '3,200', accuracy: '99.9%' },
    },
    {
      id: 'pulse-analytics',
      title: 'Pulse Realtime Metrics Engine',
      category: 'Frontend',
      status: 'Deployed',
      shortDescription:
        'Live telemetry dashboard with WebSockets and custom Canvas charts.',
      description:
        'Visualizes millions of incoming streaming telemetry data points in real time with hardware-accelerated charting canvas and customizable alert triggers.',
      problem:
        'Existing chart libraries dropped frames once event volume passed a few hundred thousand per minute.',
      solution:
        'Wrote a Canvas renderer with downsampling, WebSocket backpressure, and worker-thread aggregation.',
      architecture: [
        'Vite + React + TypeScript client',
        'WebSocket fan-in with binary frames',
        'OffscreenCanvas workers for draw loops',
        'Alert rules compiled to a tiny DSL',
      ],
      features: [
        '60 FPS at 1M+ events/sec',
        'Custom alert triggers',
        '90-day retention explorer',
        'Shareable dashboard snapshots',
      ],
      tech: [
        'React',
        'TypeScript',
        'WebSockets',
        'Tailwind CSS',
        'Chart.js',
        'Vite',
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      ],
      demoUrl: 'https://example.com/pulse',
      githubUrl: 'https://github.com/mulindijr/pulse-analytics',
      featured: true,
      metrics: { fps: '60 FPS', events: '1M+/sec', retention: '90 days' },
    },
    {
      id: 'harbor-api',
      title: 'Harbor API Gateway',
      category: 'Backend/API',
      status: 'Active',
      shortDescription:
        'Edge gateway with rate limits, signed webhooks, and tenant isolation.',
      description:
        'A multi-tenant API gateway that fronts internal services with JWT auth, quota enforcement, and request tracing.',
      problem:
        'Product teams were each rolling their own auth and rate-limit logic, creating inconsistent SLAs.',
      solution:
        'Centralized the edge with a typed plugin model and per-tenant policies stored in Postgres.',
      architecture: [
        'Node.js gateway on Fastify',
        'Redis sliding-window rate limits',
        'OpenTelemetry traces to Tempo',
        'Policy engine with hot reload',
      ],
      features: [
        'Per-tenant quotas and keys',
        'Signed outbound webhooks',
        'Request/response transforms',
        'Live traffic inspector',
      ],
      tech: ['Node.js', 'Fastify', 'Redis', 'PostgreSQL', 'OpenTelemetry'],
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      ],
      demoUrl: 'https://example.com/harbor',
      githubUrl: 'https://github.com/mulindijr/harbor-api',
      featured: false,
      metrics: { p99: '12ms', tenants: '80+', uptime: '99.95%' },
    },
    {
      id: 'atlas-ops',
      title: 'Atlas GitOps Platform',
      category: 'Cloud/DevOps',
      status: 'Deployed',
      shortDescription:
        'Git-driven environments with preview stacks and policy gates.',
      description:
        'Automates environment provisioning from pull requests, with cost caps and signed promotion to production.',
      problem:
        'Preview environments leaked spend and drifted from production compose files.',
      solution:
        'Mapped each PR to an ephemeral stack with Terraform modules and automatic teardown.',
      architecture: [
        'GitHub Actions + custom controllers',
        'Terraform modules for VPC/ECS/RDS',
        'Policy-as-code with OPA',
        'Slack/Linear status callbacks',
      ],
      features: [
        'One-click preview URLs',
        'Signed promote-to-prod',
        'Budget alarms per team',
        'Drift detection reports',
      ],
      tech: ['Terraform', 'GitHub Actions', 'AWS', 'Docker', 'OPA'],
      image:
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80',
      ],
      demoUrl: 'https://example.com/atlas',
      githubUrl: 'https://github.com/mulindijr/atlas-ops',
      featured: false,
      metrics: { previews: '1.2k/mo', mttr: '8 min', waste: '-37%' },
    },
    {
      id: 'lumen-ui',
      title: 'Lumen Component Library',
      category: 'Frontend',
      status: 'Active',
      shortDescription:
        'Accessible admin-dashboard primitives with tokens and motion.',
      description:
        'Open-source React component set for consoles: data grids, command palettes, glass cards, and terminal blocks.',
      problem:
        'Internal products kept forking slightly different buttons, tables, and palettes.',
      solution:
        'Extracted a tokenized library with Storybook, a11y tests, and copy-paste recipes.',
      architecture: [
        'React 19 + TypeScript primitives',
        'CSS tokens compatible with Tailwind v4',
        'Framer Motion presence recipes',
        'Storybook + Playwright a11y suite',
      ],
      features: [
        'Keyboard-first command palette',
        'Focus-visible by default',
        'Light/dark token pairs',
        'Tree-shakeable icons',
      ],
      tech: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Storybook',
      ],
      image:
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80',
      ],
      demoUrl: 'https://example.com/lumen',
      githubUrl: 'https://github.com/mulindijr/lumen-ui',
      featured: false,
      metrics: { stars: '1.2k', packages: '14', a11y: 'WCAG 2.2' },
    },
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Lead Full-Stack & Cloud Engineer',
      company: 'Apex Tech Systems',
      location: 'Remote · San Francisco, CA',
      period: '2022 — Present',
      type: 'Full-Time',
      description:
        'Heading the platform architecture team building cloud observability engines and high-scale SaaS web portals.',
      highlights: [
        'Architected microservices infrastructure serving 2M+ active monthly requests with 99.99% reliability.',
        'Migrated a legacy monolithic frontend to a modern React + Vite design system, reducing load times by 65%.',
        'Mentored a team of 8 engineers across frontend, backend, and DevOps domains.',
      ],
      skills: [
        'React',
        'TypeScript',
        'Node.js',
        'AWS',
        'Docker',
        'PostgreSQL',
        'Tailwind CSS',
      ],
    },
    {
      id: 'exp-2',
      role: 'Senior Software Engineer',
      company: 'Veloce Digital Labs',
      location: 'San Jose, CA',
      period: '2019 — 2022',
      type: 'Full-Time',
      description:
        'Developed fintech payment portals, distributed caching layers, and high-frequency trading dashboards.',
      highlights: [
        'Designed a real-time transaction processing API handling up to 3,500 operations per second.',
        'Implemented a Redis distributed lock mechanism preventing double-spend anomalies.',
        'Built automated CI/CD pipelines, reducing release turnaround from days to 15 minutes.',
      ],
      skills: ['React', 'Python', 'FastAPI', 'Redis', 'Kafka', 'GraphQL'],
    },
    {
      id: 'exp-3',
      role: 'Software Engineer',
      company: 'Northwind Apps',
      location: 'Nairobi, Kenya',
      period: '2017 — 2019',
      type: 'Full-Time',
      description:
        'Delivered client web products, REST APIs, and the first internal component library.',
      highlights: [
        'Launched 12 production apps for logistics and civic clients.',
        'Introduced code review, CI, and staging environments.',
        'Owned on-call for a fleet of Node services.',
      ],
      skills: ['JavaScript', 'Node.js', 'React', 'PostgreSQL', 'Linux'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'B.S. in Computer Science',
      institution: 'University of Nairobi',
      period: '2013 — 2017',
      honors: 'First Class Honours',
      details:
        'Focused on distributed systems, algorithms, computer architecture, and software engineering principles.',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '2024',
      credential: 'Verified',
    },
    {
      id: 'cert-2',
      name: 'Certified Kubernetes Administrator',
      issuer: 'CNCF',
      year: '2023',
      credential: 'Verified',
    },
    {
      id: 'cert-3',
      name: 'Meta Frontend Developer Professional',
      issuer: 'Meta / Coursera',
      year: '2022',
      credential: 'Verified',
    },
  ],

  services: [
    {
      id: 'srv-1',
      title: 'Web App Engineering',
      icon: 'Code2',
      description:
        'End-to-end development of reactive web apps using React 19, TypeScript, and modern styling solutions.',
      deliverables: [
        'Custom dashboard UI',
        'Design-system tokens',
        'Performance budgets',
        'Accessible components',
      ],
    },
    {
      id: 'srv-2',
      title: 'API Design',
      icon: 'Network',
      description:
        'Typed REST and GraphQL surfaces with idempotency, webhooks, and docs your team will actually use.',
      deliverables: [
        'OpenAPI / GraphQL schema',
        'Auth & rate limits',
        'Webhook contracts',
        'Load-test reports',
      ],
    },
    {
      id: 'srv-3',
      title: 'System Optimization',
      icon: 'Gauge',
      description:
        'Find the slow path — queries, bundles, caches — and leave you with dashboards that prove the gain.',
      deliverables: [
        'Profiling & flamegraphs',
        'Query / index plan',
        'CDN & cache strategy',
        'SLO recommendations',
      ],
    },
    {
      id: 'srv-4',
      title: 'Cloud Architecture',
      icon: 'CloudCog',
      description:
        'Containerized deployments, AWS infrastructure, CI/CD pipelines, and zero-downtime releases.',
      deliverables: [
        'Docker & Kubernetes',
        'CI/CD workflows',
        'AWS landing zone',
        'Monitoring & alerts',
      ],
    },
  ],
};
