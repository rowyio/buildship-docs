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
  project: {
    link: 'https://github.com/rowyio/rowy', // Link to the project repository
  },
  chat: {
    link: 'https://rowy.io/discord', // Link to the Rowy Discord server
  },
  docsRepositoryBase: 'https://github.com/rowyio/buildship-docs',
  footer: {
    text: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>
          <Logo />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Copyright © {new Date().getFullYear()}
        </span>

        <a href="https://www.rowy.io" style={{ display: 'flex', justifyContent: "flex-end"}}>
          Made with 💜 by the Rowy Team
        </a>
    </div>
    )
  },
}

export default config
