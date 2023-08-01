import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'
import { ThemeSwitchButton } from './components/ThemeSwitchButton'

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <span>
        <Logo />
      </span>
    )
  },
  darkMode: false,
  gitTimestamp: null,
  head() {
    const { frontMatter } = useConfig();
    return (
        <>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          
          <meta
            property="og:title" 
            content={
              frontMatter.title
              ? frontMatter.title + " – BuildShip"
              : "BuildShip Documentation"
            } 
          />
          <meta
          name="og:description"
          content={
            frontMatter.description ||
            "AI-focused low-code backend workflow builder"
          }
        />
        </>
    );
  },
  navbar: {
    extraContent: (
      <ThemeSwitchButton />
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 4,
  },
  useNextSeoProps: () => ({ titleTemplate: '%s – BuildShip' }),
  project: {
    link: 'https://github.com/rowyio/rowy', // Link to the project repository
  },
  chat: {
    link: 'https://rowy.io/discord', // Link to the Rowy Discord server
  },
  docsRepositoryBase: 'https://github.com/rowyio/buildship-docs',
  footer: { component: null },
}

export default config
