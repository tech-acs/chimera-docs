// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dashboard Starter Kit',
  tagline: 'For census and surveys, large and small',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/chimera-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tech-acs', // Usually your GitHub org/user name.
  projectName: 'chimera-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'default',
          path: 'docs/user',
          routeBasePath: 'docs/user',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tech-acs/chimera-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tech-acs/chimera-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer',
        path: 'docs/developer',
        routeBasePath: 'docs/developer',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'manager',
        path: 'docs/manager',
        routeBasePath: 'docs/manager',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Dashboard Starter Kit',
          src: 'img/logo.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tech-acs/chimera-starter-kit',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Users',
                to: '/docs/user/intro',
              },
              {
                label: 'Managers',
                to: '/docs/manager/intro',
              },
              {
                label: 'Developers',
                to: '/docs/developer/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
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
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tech-acs/chimera-starter-kit',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UNECA. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
