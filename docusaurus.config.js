module.exports = {
  title: 'Shopaholic API',
  tagline: 'Shopaholic API documentation',
  url: 'https://planetadeleste.github.io/',
  baseUrl: '/api-shopaholic-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'planetadeleste', // Usually your GitHub org/user name.
  projectName: 'api-shopaholic-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'API Shopaholic',
      logo: {
        alt: 'Planeta del Este',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/components/',
          activeBasePath: 'components',
          label: 'Components',
          position: 'left',
        },
        {
          href: 'https://github.com/planetadeleste/api-shopaholic-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/planetadeleste/api-shopaholic-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
          'https://github.com/planetadeleste/api-shopaholic-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
