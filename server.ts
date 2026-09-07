import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { BLOG_POSTS_DATA, PROFILE_DATA, PROJECTS_DATA } from './src/data/portfolioData.js';
import { ContactSubmission } from './src/types.js';

const submissions: ContactSubmission[] = [
  {
    id: 'sub-init-1',
    name: 'Sarah Chen',
    email: 'sarah.chen@techventures.io',
    phone: '+1 415 890 2234',
    subject: 'Senior Full-Stack Architect Opportunity',
    projectType: 'Full-Time Role',
    budget: '$180k - $220k',
    message: 'Hi Paras, we were extremely impressed by your Nexus Edge Mesh project and would love to connect about leading our cloud architecture squad.',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: 'responded'
  }
];

const blogLikes: Record<string, number> = {
  'building-resilient-distributed-systems': 142,
  'mastering-core-web-vitals-react-19': 98,
  'type-safe-rest-and-graphql-apis': 187
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser
  app.use(express.json());

  // Performance headers & ETag
  app.set('etag', 'strong');

  // API Routes
  app.get('/api/health', (req: Request, res: Response) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json({
      status: 'healthy',
      service: 'Paras Gupta Portfolio Platform',
      version: '2.4.0',
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      server: 'Node.js Express Edge Cluster'
    });
  });

  // Profile data
  app.get('/api/profile', (req: Request, res: Response) => {
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes cache
    res.json(PROFILE_DATA);
  });

  // Projects data
  app.get('/api/projects', (req: Request, res: Response) => {
    const { category, search } = req.query;
    let list = [...PROJECTS_DATA];

    if (category && category !== 'All') {
      list = list.filter((p) => p.category.toLowerCase() === (category as string).toLowerCase());
    }

    if (search) {
      const q = (search as string).toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    res.setHeader('Cache-Control', 'public, max-age=60');
    res.json(list);
  });

  // Blog posts data
  app.get('/api/posts', (req: Request, res: Response) => {
    const { tag, search } = req.query;
    let list = BLOG_POSTS_DATA.map((p) => ({
      ...p,
      likes: blogLikes[p.id] || p.likes
    }));

    if (tag && tag !== 'All') {
      list = list.filter((p) => p.tags.includes(tag as string) || p.category === tag);
    }

    if (search) {
      const q = (search as string).toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    res.setHeader('Cache-Control', 'public, max-age=60');
    res.json(list);
  });

  // Like a blog post
  app.post('/api/posts/:id/like', (req: Request, res: Response) => {
    const { id } = req.params;
    const current = blogLikes[id] || 0;
    blogLikes[id] = current + 1;
    res.json({ success: true, likes: blogLikes[id] });
  });

  // Contact form submission
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, email, phone, subject, projectType, budget, message } = req.body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Please enter your full name.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ error: 'Please enter a message with at least 10 characters.' });
    }

    const newSubmission: ContactSubmission = {
      id: `sub-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      phone: (phone || '').trim(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      projectType: (projectType || 'General Inquiry').trim(),
      budget: (budget || 'Not specified').trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'received'
    };

    submissions.unshift(newSubmission);

    console.log(`[Contact Portal] New message received from ${newSubmission.name} (${newSubmission.email})`);

    return res.status(201).json({
      success: true,
      message: 'Your message has been received! Paras Gupta will respond within 24 hours.',
      submissionId: newSubmission.id,
      timestamp: newSubmission.createdAt
    });
  });

  // Contact submissions list
  app.get('/api/contact/recent', (req: Request, res: Response) => {
    res.json({
      totalCount: submissions.length,
      recent: submissions.slice(0, 5).map(s => ({
        id: s.id,
        name: s.name,
        subject: s.subject,
        createdAt: s.createdAt,
        status: s.status
      }))
    });
  });

  // SEO: Dynamic XML Sitemap
  app.get('/sitemap.xml', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    const baseUrl = process.env.APP_URL || `http://${req.headers.host || 'localhost:3000'}`;

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#portfolio</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#skills</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
    res.send(xml);
  });

  // SEO: robots.txt
  app.get('/robots.txt', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/plain');
    const baseUrl = process.env.APP_URL || `http://${req.headers.host || 'localhost:3000'}`;
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  // Vite middleware in development or static serve in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, {
      maxAge: '1d',
      setHeaders: (res, filePath) => {
        if (filePath.includes('/assets/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      }
    }));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Paras Gupta Portfolio Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
