import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <span>
        <Logo />
      </span>
    )
  },
  head: () => (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
    </>
  ),
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
