// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Note Protocol',
  tagline: 'Bitcoin Layer-1 Assets protocol with SmartContract',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://noteprotocol.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NoteProtocol', // Usually your GitHub org/user name.
  projectName: 'protocol', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  staticDirectories: [ 'static' ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    path: 'i18n',
    // locales: ['en'],
    locales: [ 'en', 'zh' ],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ( {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/NoteProtocol/protocol/tree/main/',
          // 确保 MDX 支持已启用
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/NoteProtocol/protocol/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-T6CXC4X888',
          anonymizeIP: true,
        },
      } ),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ( {
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'Note Protocol',
        logo: {
          alt: 'Note Protocol',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'actionsSidebar',
            position: 'left',
            label: 'Actions',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
          },
          {
            href: 'https://github.com/NoteProtocol',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
                label: 'Docs',
                to: '/docs/protocol',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/NoteProtocol_org',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/tGBHKDPkF5',
              },
              {
                label: 'X / Twitter',
                href: 'https://x.com/NoteProtocol',
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
                href: 'https://github.com/NoteProtocol',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Note Protocol. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } ),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects ( existingPath ) {
          if ( existingPath.includes( '/docs/Protocol/NOTE-Protocol-V2-English' ) ) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace( '/docs/Protocol/NOTE-Protocol-V2-English', '/blog/2024/07/9/note-protocol-bitcoin-smart-contracts' ),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
};

export default config;
