import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>David's Workspace</span>,
  editLink: { text: '' },
  feedback: { content: '' },

  footer: {
    text: (
      <i>
        Der Mensch kann zwar tun, was er will, aber er kann nicht wollen, was er
        will.
      </i>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – David's Workspace",
    };
  },
};

export default config;
