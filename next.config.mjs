import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true,
  },
  redirects: () => [
    {
      source: '/docs/guide/:slug(typescript|latex|tailwind-css|mermaid)',
      destination: '/docs/guide/advanced/:slug',
      permanent: true,
    },
    {
      source: '/docs/docs-theme/built-ins/:slug(callout|steps|tabs)',
      destination: '/docs/guide/built-ins/:slug',
      permanent: true,
    },
    {
      source: '/:slug(rest-api|scheduled-cron|scheduled-interval|telegram-bot|rowy-trigger)',
      destination: '/trigger-nodes/:slug',
      permanent: true,
    },
    {
      source: '/meta/whatsapp',
      destination: '/whatsapp',
      permanent: true,
    },
    {
      source: '/utility-nodes/overview',
      destination: '/utility-nodes',
      permanent: true,
    },
    {
      source: '/integrations/:slug(whatsapp)',
      destination: '/whatsapp',
      permanent: true,
    },
    {
      source: '/:slug(whatsapp)',
      destination: '/messaging/:slug',
      permanent: true,
    },
    {
      source: '/:slug(stripe)',
      destination: '/payment/:slug',
      permanent: true,
    },
    {
      source: '/:slug(supabase|pinecone|mysql)',
      destination: '/database/:slug',
      permanent: true,
    },
    {
      source: '/workflow-operations',
      destination: '/features/copy-paste',
      permanent: true,
    },
    {
      source: '/dev-tools/:slug(fal-ai|eleven-labs)',
      destination: '/ai-models/:slug',
      permanent: true,
    },
    {
      source: '/ai-models/typesense',
      destination: '/search/typesense',
      permanent: true,
    },
    {
      source: '/ai-models/assistant',
      destination: '/ai-assistant/assistant',
      permanent: true,
    },
    {
      source: '/trigger-nodes/:slug(every-day|every-hour|every-month|every-week)',
      destination: '/trigger-nodes/scheduled-cron/:slug',
      permanent: true,
    },
    {
      source: '/core-nodes/api-call-node',
      destination: '/utility-nodes/api-call-node',
      permanent: true,
    },
    // v2 redirect changes
    {
      source:
        '/basics/:slug(workflow|node|trigger|input|ship-an-api|input-validation|output|update-outputs|variables|reordering-nodes|api-spec|buildship-tables|oauth|path-variable)',
      destination: '/getting-started/:slug',
      permanent: true,
    },
    {
      source:
        '/trigger-nodes/:slug(rest-api|scheduled-cron|rowy-trigger|telegram-bot|supabase-trigger|buildship-trigger|firebase-auth-request|github-trigger|rest-api-file-upload|rest-api-file-upload-auth|whatsapp-bot|email-trigger|lemon-squeezy|revenuecat-trigger|mongodb-trigger|youtube-trigger)',
      destination: '/connecting-triggers/:slug',
      permanent: true,
    },
  ],
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/;

    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test('.svg'));
    fileLoaderRule.exclude = allowedSvgRegex;

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
