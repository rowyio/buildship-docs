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
      source: '/trigger-nodes/:slug(firebase-file-upload|rest-api|firebase-auth|file-upload)',
      destination: '/triggers-rest-api/:slug',
      permanent: true,
    },
    {
      source: '/triggers-database/github-trigger',
      destination: '/triggers-integrations/github-trigger',
      permanent: true,
    },
    {
      source: '/trigger-nodes/scheduled-interval',
      destination: '/triggers-scheduled/scheduled-interval',
      permanent: true,
    },
    {
      source: '/triggers-database/github-trigger',
      destination: '/triggers-integrations/github-trigger',
      permanent: true,
    },
    {
      source: '/nodes/api-spec',
      destination: '/api-spec',
      permanent: true,
    },
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
      source: '/:slug(flutterflow|bubble|toddle|webflow|framer|weweb|webstudio|wordpress|nextjs)',
      destination: '/connect-with/:slug',
      permanent: true,
    },
    {
      source: '/getting-started/node',
      destination: '/nodes',
      permanent: true,
    },
    {
      source: '/getting-started/:slug(input|input-validation|output|update-outputs|oauth)',
      destination: '/nodes/:slug',
      permanent: true,
    },
    {
      source: '/getting-started/workflow',
      destination: '/workflows',
      permanent: true,
    },
    {
      source: '/getting-started/:slug(ship-an-api|variables|api-spec)',
      destination: '/nodes/:slug',
      permanent: true,
    },
    {
      source: '/getting-started/trigger',
      destination: '/triggers',
      permanent: true,
    },
    {
      source: '/getting-started/path-variable',
      destination: '/triggers/path-variable',
      permanent: true,
    },
    {
      source: '/getting-started/:slug(reordering-nodes|buildship-tables)',
      destination: '/features/:slug',
      permanent: true,
    },
    // triggers
    {
      source: '/triggers-database/buildship-trigger',
      destination: '/triggers-integrations/buildship-trigger',
      permanent: true,
    },
    {
      source: '/connecting-triggers/:slug(rest-api|firebase-auth|file-upload|firebase-file-upload)',
      destination: '/triggers-rest-api/:slug',
      permanent: true,
    },
    {
      source: '/connecting-triggers/:slug(scheduled-cron|scheduled-interval)',
      destination: '/triggers-scheduled/:slug',
      permanent: true,
    },
    {
      source: '/connecting-triggers/:slug(telegram-bot|whatsapp-bot)',
      destination: '/triggers-bots/:slug',
      permanent: true,
    },
    {
      source:
        '/connecting-triggers/:slug(mongodb-trigger|rowy-trigger|supabase-trigger|buildship-trigger|github-trigger)',
      destination: '/triggers-database/:slug',
      permanent: true,
    },
    {
      source: '/connecting-triggers/:slug(buildship-trigger|email-trigger|youtube-trigger|github-trigger)',
      destination: '/triggers-integrations/:slug',
      permanent: true,
    },
    {
      source: '/connecting-triggers/:slug(lemon-squeezy|revenue-cat)',
      destination: '/triggers-payments/:slug',
      permanent: true,
    },
    // explore features
    {
      source: '/features/:slug',
      destination: '/:slug',
      permanent: true,
    },
    // http nodes
    {
      source: '/http-nodes',
      destination: '/core-nodes/http',
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
