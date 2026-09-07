import { BlogPost, ProfileInfo, Project, SkillCategory } from '../types';

export const PROFILE_DATA: ProfileInfo = {
  name: 'PARAS GUPTA',
  tagline: 'Engineering High-Performance Web Applications & Scalable Distributed Systems',
  role: 'Senior Full-Stack Engineer & Product Architect',
  phone: '9376126755',
  email: '9parasgupta9@gmail.com',
  linkedin: 'Paras Gupta',
  linkedinUrl: 'https://www.linkedin.com/in/paras-gupta-94b086429/',
  location: 'Bangalore / New Delhi (Open to Remote Worldwide)',
  availability: 'Available for high-impact contracts & full-time technical leadership',
  yearsOfExperience: 6,
  projectsShipped: 42,
  codeReviews: 1200,
  uptimeCommitment: '99.99%',
  bio: 'Full-stack engineer passionate about building resilient distributed systems, sub-millisecond web frontends, and developer-first platforms. Experienced in architecting end-to-end cloud-native services, micro-frontends, reactive UI design systems, and mission-critical APIs.',
  highlights: [
    'Architected high-throughput services processing over 15M+ requests daily with sub-80ms p95 latency.',
    'Built design systems adopted across 14 cross-functional product squads with 98% accessibility rating.',
    'Engineered automated CI/CD and edge delivery caching strategies cutting page load times by 68%.',
    'Mentored 20+ junior & mid-level engineers in distributed systems design, TypeScript safety, and clean code.'
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-cloud-mesh',
    title: 'Nexus Cloud Mesh & Edge Gateway',
    subtitle: 'Ultra-low latency microservices orchestration gateway with real-time telemetry',
    description: 'A distributed API gateway and edge router built for modern cloud workloads, featuring dynamic service discovery, adaptive rate-limiting, and WebSocket health streaming.',
    longDescription: 'Nexus was engineered to solve high-frequency routing bottlenecks for enterprise SaaS clusters. By implementing an in-memory worker pool with eBPF-inspired socket pooling and zero-copy JSON parsing, the gateway reduced cross-region API hops from 140ms down to 18ms under 45k concurrent connections.',
    category: 'Cloud & DevOps',
    tags: ['Go', 'TypeScript', 'Docker', 'Redis', 'WebSockets', 'Prometheus', 'Envoy'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/parasgupta/nexus-mesh-preview',
    githubUrl: 'https://github.com/parasgupta/nexus-cloud-mesh',
    metrics: [
      { label: 'p95 Latency', value: '18ms' },
      { label: 'Throughput', value: '45k req/sec' },
      { label: 'Uptime', value: '99.995%' }
    ],
    keyFeatures: [
      'Sub-millisecond route resolution via radix-tree lookup cache',
      'Adaptive token-bucket rate limiting with distributed Redis clusters',
      'Real-time metrics streaming to Grafana and OpenTelemetry tracing',
      'Automated mTLS handshake verification and zero-trust policy enforcement'
    ],
    architecture: [
      'Layer 7 routing engine built with optimized streaming pipes',
      'Edge CDN caching tier with automated cache invalidation webhooks',
      'Graceful worker degradation during downstream failover'
    ],
    role: 'Lead Systems Architect & Core Developer',
    year: '2025',
    featured: true
  },
  {
    id: 'synapse-ai-canvas',
    title: 'Synapse AI Workspace & Canvas',
    subtitle: 'Collaborative node-based workspace with streaming LLM generative pipelines',
    description: 'An infinite collaborative graph canvas where product teams compose multi-step AI reasoning workflows, test prompts with live telemetry, and generate production code.',
    longDescription: 'Synapse combines infinite-canvas vector rendering with reactive state engines. Users link conversational LLMs, code generation blocks, and API mock nodes on an interactive WebGL/SVG canvas. Built with optimistic UI updates and CRDT conflict resolution for seamless multiplayer collaboration.',
    category: 'AI & Systems',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'FastAPI', 'Gemini Pro', 'Canvas API'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/parasgupta/synapse-ai-canvas',
    githubUrl: 'https://github.com/parasgupta/synapse-ai-canvas',
    metrics: [
      { label: 'Active Teams', value: '3,400+' },
      { label: 'Frame Rate', value: '60 FPS Canvas' },
      { label: 'Prompt Sync', value: '<40ms' }
    ],
    keyFeatures: [
      'GPU-accelerated infinite workspace supporting 10,000+ interactive nodes',
      'Streaming multi-model comparison matrix with live token diffing',
      'Real-time cursor presence and collaborative branching history',
      'One-click export to production TypeScript SDK & serverless handlers'
    ],
    architecture: [
      'Hybrid React Virtual DOM and 2D canvas context renderer',
      'Yjs CRDT state synchronized over secure bidirectional WebSockets',
      'Server-side streaming proxy with token throttling and usage auditing'
    ],
    role: 'Full-Stack Lead & UI/UX Architect',
    year: '2024',
    featured: true
  },
  {
    id: 'chronos-fintech-engine',
    title: 'Chronos Multi-Currency Ledger',
    subtitle: 'Immutable double-entry financial ledger platform with sub-second reconciliation',
    description: 'High-assurance fintech core banking infrastructure supporting automated currency conversion, cryptographic transaction signing, and compliance auditing.',
    longDescription: 'Designed and deployed for a high-growth cross-border payments processor. Chronos eliminates reconciliation race conditions through strict serializable transaction isolation, idempotent idempotency keys, and tamper-proof hash-chained audit trails.',
    category: 'Full-Stack',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Kafka', 'Docker', 'Tailwind CSS', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/parasgupta/chronos-ledger-demo',
    githubUrl: 'https://github.com/parasgupta/chronos-fintech-engine',
    metrics: [
      { label: 'Volume Processed', value: '$120M+' },
      { label: 'Settlement Error', value: '0.000%' },
      { label: 'Audit Speed', value: 'Real-time' }
    ],
    keyFeatures: [
      'Rigorous double-entry bookkeeping with balance preservation invariants',
      'High-velocity Kafka event-stream consumer handling 8,000 tx/sec',
      'Interactive executive analytics dashboard with responsive drill-downs',
      'Automated currency peg updates with 15-second FX quote refresh'
    ],
    architecture: [
      'Event-sourced persistence layer with Postgres advisory locks',
      'Clean DDD (Domain-Driven Design) separation between core ledger and external rails',
      'Secure signed JWT and webhook dispatcher with exponential backoff'
    ],
    role: 'Backend Core Engineer',
    year: '2024',
    featured: true
  },
  {
    id: 'krypton-design-system',
    title: 'Krypton Accessible Design System',
    subtitle: 'WCAG AAA certified headless component ecosystem with themeable tokens',
    description: 'An open-source, highly accessible design system and component engine built for enterprise web applications with fluid typography and zero runtime styling overhead.',
    longDescription: 'Krypton was architected to bridge design tokens from Figma directly into typed React and Tailwind packages. Features complete keyboard navigation semantics, screen reader announcements, and token-driven multi-brand styling.',
    category: 'Mobile & Web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Figma API'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/parasgupta/krypton-ui',
    githubUrl: 'https://github.com/parasgupta/krypton-design-system',
    metrics: [
      { label: 'GitHub Stars', value: '1.8k+' },
      { label: 'Accessibility', value: 'WCAG AAA' },
      { label: 'Bundle Size', value: '3.2kb Core' }
    ],
    keyFeatures: [
      '60+ headless components with pre-tested keyboard accessibility',
      'Automatic dark mode and high-contrast color palette generation',
      'Zero layout shift (CLS: 0.00) responsive patterns',
      'Interactive component playground with real-time code generator'
    ],
    architecture: [
      'Modern compound component pattern with typed React Context',
      'CSS variable token injection with automatic perceptual lightness normalization',
      'Tree-shakeable ESM module structure'
    ],
    role: 'Creator & Maintainer',
    year: '2023',
    featured: false
  },
  {
    id: 'pulse-telemetry-suite',
    title: 'Pulse Web Vitals Telemetry',
    subtitle: 'Edge-native Core Web Vitals beacon aggregator with real user monitoring (RUM)',
    description: 'Lightweight JavaScript SDK and serverless ingest pipeline capturing LCP, FID, CLS, and INP metrics from 2M+ daily active sessions with zero client overhead.',
    longDescription: 'Pulse collects real-time user browser timing metrics using the PerformanceObserver API and sends them via Beacon API. An edge-worker pipeline batches, deduplicates, and surfaces latency regressions to engineering teams within seconds.',
    category: 'Cloud & DevOps',
    tags: ['Cloudflare Workers', 'ClickHouse', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/parasgupta/pulse-rum-monitor',
    githubUrl: 'https://github.com/parasgupta/pulse-telemetry-suite',
    metrics: [
      { label: 'Daily Beacons', value: '2.4M+' },
      { label: 'SDK Footprint', value: '820 bytes' },
      { label: 'Report Delay', value: '<500ms' }
    ],
    keyFeatures: [
      'Ultra-compact client beacon with zero impact on user interaction',
      'Aggregated percentile distribution visualizer (p50, p75, p90, p99)',
      'Smart anomaly detection alerting on unexpected performance regressions',
      'Multi-device breakdown comparing mobile vs desktop experience'
    ],
    architecture: [
      'Edge worker ingestion endpoint with geo-IP location tagging',
      'Columnar database storage optimized for time-series aggregation',
      'Responsive React dashboard with interactive date-range filtering'
    ],
    role: 'Full-Stack Performance Engineer',
    year: '2024',
    featured: false
  },
  {
    id: 'zenith-markdown-cms',
    title: 'Zenith Headless Git-backed CMS',
    subtitle: 'Lightning fast developer publishing engine with MDX and edge ISR generation',
    description: 'A developer-centric content engine that compiles Markdown and MDX documents into static pages with search indexing, syntax highlighting, and live drafts.',
    longDescription: 'Created to make technical documentation and engineering blogs effortless to maintain. Zenith connects directly to GitHub repositories, compiles content at build time, and delivers instant previews with pre-rendered code blocks and interactive diagrams.',
    category: 'Full-Stack',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'Express'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/parasgupta/zenith-cms-live',
    githubUrl: 'https://github.com/parasgupta/zenith-markdown-cms',
    metrics: [
      { label: 'Build Time', value: '1.2s' },
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Index Speed', value: 'Instant' }
    ],
    keyFeatures: [
      'Full-text client-side fuzzy search with sub-5ms response',
      'Syntax highlighted code fences with one-click copy and line highlighting',
      'Dynamic SEO OpenGraph image generation per post',
      'Automated table of contents generation with scroll spy tracking'
    ],
    architecture: [
      'AST-based markdown parser pipeline with custom remark/rehype plugins',
      'Static asset pipeline with responsive WebP image optimization',
      'Lightweight server API caching layer'
    ],
    role: 'Full-Stack Architect',
    year: '2023',
    featured: false
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'building-resilient-distributed-systems',
    slug: 'building-resilient-distributed-systems',
    title: 'Architecting Resilient Distributed Systems with TypeScript and Node.js',
    excerpt: 'Key strategies for designing fault-tolerant backend services: circuit breakers, exponential backoff with jitter, idempotent state transitions, and graceful degradation.',
    content: `When designing modern cloud architectures, failure is not an edge case—it is a certainty. Network partitions, downstream rate limits, and transient database spikes inevitably occur. Building a truly resilient system requires moving from defensive error handling to offensive architectural containment.

### 1. The Circuit Breaker Pattern in Microservices
A common anti-pattern in distributed architectures is continuous retrying against an already overloaded downstream service. This creates cascading failures (the "thundering herd" problem).

A circuit breaker monitors outgoing requests and maintains three states:
- **Closed**: Requests pass through normally. Failure counts are tracked within a rolling sliding window.
- **Open**: When the error threshold is breached (e.g. >25% failures in 10s), the breaker immediately fails fast without dispatching the request.
- **Half-Open**: After a cooldown period, a small fraction of canary requests are allowed. If successful, the circuit resets to Closed; otherwise, it trips back to Open.

### 2. Backoff with Full Jitter
Standard linear or exponential retries often synchronize client retries, causing pulsed traffic spikes. Adding uniform random jitter diffuses client requests smoothly over time:

\`\`\`typescript
function calculateBackoff(attempt: number, baseMs: number = 100, maxMs: number = 5000): number {
  const exponential = Math.min(maxMs, baseMs * Math.pow(2, attempt));
  // Full jitter: uniformly distributed between 0 and calculated exponential delay
  return Math.floor(Math.random() * exponential);
}
\`\`\`

### 3. Guaranteeing Idempotency
Every mutating HTTP POST or PUT request should support an \`Idempotency-Key\` header. By tracking processed keys in an atomic Redis cache with a 24-hour TTL, subsequent duplicate requests return the cached response rather than re-executing business logic.

### 4. Zero-Downtime Deployment & Graceful Shutdown
Always register SIGTERM and SIGINT listeners in your Node server. Stop accepting incoming HTTP traffic, wait for existing in-flight connections to complete with a reasonable timeout (e.g. 15 seconds), and gracefully close database connection pools.`,
    readTime: '6 min read',
    date: 'February 24, 2025',
    category: 'Architecture & Backend',
    tags: ['Node.js', 'Distributed Systems', 'TypeScript', 'Scalability', 'Reliability'],
    author: {
      name: 'Paras Gupta',
      role: 'Senior Full-Stack Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    likes: 142
  },
  {
    id: 'mastering-core-web-vitals-react-19',
    slug: 'mastering-core-web-vitals-react-19',
    title: 'Achieving 100 Core Web Vitals on React: A Practical Engineering Playbook',
    excerpt: 'How to eliminate Layout Shifts (CLS), optimize Interaction to Next Paint (INP), and achieve sub-second Largest Contentful Paint (LCP) in production.',
    content: `User experience is inextricably linked to performance. Google's Core Web Vitals directly influence both user conversion rates and search discoverability. Here is an actionable breakdown of how we achieved perfect 100 Lighthouse scores across high-traffic web applications.

### 1. Eliminating Cumulative Layout Shift (CLS < 0.02)
Layout shifts occur when elements render without reserved dimensional footprints:
- **Aspect Ratio Pre-allocation**: Always declare explicit \`aspect-ratio\` or \`width\` and \`height\` attributes on visual elements before images or embeds load.
- **Font Display Fallbacks**: Use \`font-display: swap\` with matched metric fallbacks (\`size-adjust\`, \`ascent-override\`, and \`descent-override\`) to prevent layout jump when custom Google Web Fonts swap in.
- **Dynamic Content Containers**: Reserve min-height spaces for asynchronous banners or dynamic feed cards.

### 2. Minimizing Interaction to Next Paint (INP < 120ms)
INP replaced FID as the definitive metric measuring page responsiveness:
- Break long-running CPU tasks using \`requestIdleCallback\` or \`scheduler.yield()\`.
- Leverage React 19 concurrent features like \`useTransition\` for non-urgent state updates, keeping the main thread responsive to user clicks and inputs.
- Avoid re-creating expensive memoized selectors inside hot component render paths.

### 3. Turbocharging Largest Contentful Paint (LCP < 1.2s)
- Host critical fonts and above-the-fold hero images on high-performance CDN edge networks.
- Use \`<link rel="preload">\` for critical visual assets.
- Implement responsive WebP/AVIF formats with dynamic \`srcset\` declarations to avoid sending 4K images to 375px mobile viewports.`,
    readTime: '5 min read',
    date: 'January 18, 2025',
    category: 'Frontend & Performance',
    tags: ['React 19', 'Performance', 'Web Vitals', 'Frontend', 'SEO'],
    author: {
      name: 'Paras Gupta',
      role: 'Senior Full-Stack Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    likes: 98
  },
  {
    id: 'type-safe-rest-and-graphql-apis',
    slug: 'type-safe-rest-and-graphql-apis',
    title: 'End-to-End Type Safety: Bridging Express Backends and React Frontends',
    excerpt: 'Eliminating runtime data mismatches between client and server using shared TypeScript contracts, Zod schema validation, and typed API clients.',
    content: `Maintaining code reliability across growing engineering teams requires single-source-of-truth type systems. When client and server share TypeScript types, breaking changes are intercepted at compile-time rather than reported by angry users in production.

### The Problem with Loose JSON Contracts
In untyped applications, a backend field rename from \`user_id\` to \`userId\` silently breaks the UI. Even with manual TypeScript interfaces, drift happens when documentation or code diverges.

### The Unified Schema Strategy
By defining request payloads and response structures using schema validation libraries like Zod or shared interfaces:
1. **Runtime Validation**: Incoming HTTP requests are validated at the Express route boundary. Bad input is rejected with clear 400 Bad Request error dictionaries.
2. **Compile-time Types**: Frontend clients import typed schemas directly or consume inferred types (\`z.infer<typeof Schema>\`), guaranteeing autocomplete and strict type checking throughout your UI components.

\`\`\`typescript
// Shared Contract
export interface ContactMessagePayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Client POST Handler
async function submitContact(data: ContactMessagePayload) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
\`\`\`

### Testing Without Mocks
With shared contracts, unit and integration tests verify both ends of the wire. If a database migration alters a required field, the compiler alerts you before code is ever merged into main.`,
    readTime: '7 min read',
    date: 'December 12, 2024',
    category: 'Full-Stack & TypeScript',
    tags: ['TypeScript', 'Express', 'API Design', 'Zod', 'Clean Code'],
    author: {
      name: 'Paras Gupta',
      role: 'Senior Full-Stack Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    likes: 187
  }
];

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Architecture & UI/UX',
    iconName: 'Layout',
    summary: 'Building fluid, accessible, and reactive interfaces with strict type guarantees.',
    skills: [
      { name: 'React 19 / Next.js', level: 96, experience: '5+ years', description: 'Server components, hooks, concurrent transitions, custom hooks' },
      { name: 'TypeScript', level: 95, experience: '5+ years', description: 'Strict typing, generics, utility types, AST manipulation' },
      { name: 'Tailwind CSS & Design Systems', level: 98, experience: '4+ years', description: 'Custom plugin systems, CSS variables, tokens, WCAG AAA accessibility' },
      { name: 'Motion / Animations', level: 90, experience: '3+ years', description: 'Layout animations, gesture feedback, page transitions' },
      { name: 'State Management & WebSockets', level: 92, experience: '4+ years', description: 'Zustand, React Query, optimistic mutations, real-time sync' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Distributed Systems',
    iconName: 'Server',
    summary: 'Crafting robust microservices, scalable APIs, and event-driven architectures.',
    skills: [
      { name: 'Node.js & Express / NestJS', level: 94, experience: '6+ years', description: 'REST APIs, middleware pipelines, streaming responses, security hardening' },
      { name: 'Go / Microservices', level: 82, experience: '2+ years', description: 'Goroutines, channels, lightweight services, HTTP/2 proxies' },
      { name: 'PostgreSQL & Relational Design', level: 90, experience: '5+ years', description: 'Complex joins, indexing strategies, migrations, ACID transactions' },
      { name: 'Redis & Caching Strategies', level: 92, experience: '4+ years', description: 'In-memory stores, distributed locks, pub/sub, rate-limiting' },
      { name: 'Kafka & Event Queues', level: 85, experience: '3+ years', description: 'Event sourcing, consumer groups, dead-letter queues' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure & DevOps',
    iconName: 'Cloud',
    summary: 'Deploying high-availability infrastructure with automated CI/CD pipelines.',
    skills: [
      { name: 'Docker & Containerization', level: 92, experience: '5+ years', description: 'Multi-stage builds, rootless containers, micro-images' },
      { name: 'Google Cloud Platform (GCP) & Cloud Run', level: 90, experience: '4+ years', description: 'Serverless containers, Cloud Storage, IAM, VPC peering' },
      { name: 'CI/CD & GitHub Actions', level: 94, experience: '5+ years', description: 'Automated test runners, linting, matrix builds, release tagging' },
      { name: 'Edge CDN & Performance Caching', level: 88, experience: '4+ years', description: 'Cloudflare Workers, asset hashing, ETag validation' },
      { name: 'Monitoring & Telemetry', level: 86, experience: '3+ years', description: 'Prometheus, OpenTelemetry, Grafana dashboards, APM alerts' }
    ]
  }
];
