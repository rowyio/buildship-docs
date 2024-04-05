import Logo from '@components/Logo';
import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';
import favicon16 from './public/favicon-16x16.png';
import favicon32 from './public/favicon-32x32.png';
import appleTouchIcon from './public/apple-touch-icon.png';
import Help from '@components/features/help';
import dynamic from 'next/dynamic';

const ChatWidget = dynamic(() => import('./components/chatWidget/ChatWidget'), {
  ssr: false,
});

const logo = (
  <span>
    <Logo />
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.2) 50%, black 75%);
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: 'https://buildship.com/github', // Link to the GitHub repo
  },
  chat: {
    link: 'https://buildship.com/discord', // Link to the Rowy Discord server
  },
  docsRepositoryBase: 'https://github.com/rowyio/buildship-docs/blob/main',
  navbar: {
    extraContent: (
      <>
        <a
          style={{ padding: '0.5rem' }}
          target='_blank'
          href='https://twitter.com/BuildShipApp'
          aria-label='BuildShip Twitter'
          rel='nofollow noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-twitter'
          >
            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
          </svg>
        </a>
      </>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – BuildShip',
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { asPath, pathname } = useRouter();
    const { frontMatter } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === '/' || !title
        ? 'https://docs.buildship.com/og.png'
        : `https://docs.buildship.com/api/og?title=${title}`;

    const ogConfig = {
      title: 'docs.buildship.com',
      description:
        'A unified resource to start building your backend with low-code. Dive into triggers, nodes, and step-by-step guidance to jumpstart your workflow creation.',
      favicon: favicon32,
    };
    const favicon = String(ogConfig.favicon);
    const description = String(frontMatter.description || ogConfig.description);
    const canonical = new URL(asPath, 'https://docs.buildship.com').toString();

    return (
      <>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta property='og:url' content={canonical} />
        <link rel='canonical' href={canonical} />

        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        {/* <meta name='title' content='BuildShip Documentation' />
        <meta
          name='description'
          content='A unified resource to start building your backend with low-code. Dive into triggers, nodes, and step-by-step guidance to jumpstart your workflow creation.'
        /> */}

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={socialCard} />
        <meta name='twitter:site' content='@BuildShipApp' />
        <meta name='twitter:url' content='https://docs.buildship.com' />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={description} />
        <meta
          property='og:title'
          content={frontMatter.title ? frontMatter.title + ' – BuildShip Docs' : 'BuildShip Documentation'}
        />
        <meta
          property='og:description'
          content={
            frontMatter.description ||
            'A unified resource to start building your backend with low-code. Dive into triggers, nodes, and step-by-step guidance to jumpstart your workflow creation.'
          }
        />
        <meta
          property='og:image'
          content='https://storage.googleapis.com/website-a1s39m.appspot.com/buildship-app-logos/OG.png'
        />

        <meta name='apple-mobile-web-app-title' content={description} />
        <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon.src}></link>
        <link rel='icon' type='image/png' sizes='32x32' href={favicon32.src}></link>
        <link rel='icon' type='image/png' sizes='16x16' href={favicon16.src}></link>
        <link rel='manifest' href='/site.webmanifest'></link>
      </>
    );
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
    useLink: () => 'https://buildship.com/discord',
  },
  editLink: {
    text: 'Edit this page on GitHub ↗',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className='cursor-default'>{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  main: function useMain({ children }) {
    return (
      <>
        {children}
        <Help />
      </>
    );
  },
  navigation: { prev: false, next: false },
  footer: { component: <ChatWidget /> },
  gitTimestamp: null,
};

export default config;
