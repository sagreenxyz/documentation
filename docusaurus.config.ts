import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
<<<<<<< HEAD
  title: 'My Documentation Site', // Update site title
  tagline: 'Documentation for my project', // Update tagline
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sagreenxyz.github.io', // Your GitHub Pages URL
=======
  title: 'My Documentation Site', // Consider updating
  tagline: 'Documentation for my project', // Consider updating
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sagreenxyz.github.io', // Your GitHub Pages base URL
>>>>>>> 2e08443 (update to deploy to github pages)
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/', // Your repository name

  // GitHub pages deployment config.
<<<<<<< HEAD
  // If you aren't using GitHub pages, you don't need these.
=======
>>>>>>> 2e08443 (update to deploy to github pages)
  organizationName: 'sagreenxyz', // Your GitHub username.
  projectName: 'documentation', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
<<<<<<< HEAD
          // Point to your repo for "edit this page" links
          editUrl:
            'https://github.com/sagreenxyz/documentation/tree/main/', // Update this
=======
          // Update the edit URL base path
          editUrl:
            'https://github.com/sagreenxyz/documentation/tree/main/',
>>>>>>> 2e08443 (update to deploy to github pages)
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
<<<<<<< HEAD
          // Point to your repo for "edit this page" links
          editUrl:
            'https://github.com/sagreenxyz/documentation/tree/main/', // Update this
=======
          // Update the edit URL base path
          editUrl:
            'https://github.com/sagreenxyz/documentation/tree/main/',
>>>>>>> 2e08443 (update to deploy to github pages)
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg', // Consider creating a custom social card
    navbar: {
<<<<<<< HEAD
      title: 'My Project', // Update navbar title
=======
      title: 'My Project', // Consider updating
>>>>>>> 2e08443 (update to deploy to github pages)
      logo: {
        alt: 'My Project Logo', // Update logo alt text
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sagreenxyz/documentation', // Update GitHub link
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
              label: 'Tutorial',
              to: '/docs/intro',
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
              label: 'X',
              href: 'https://x.com/docusaurus',
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
              href: 'https://github.com/sagreenxyz/documentation', // Update GitHub link
            },
          ],
        },
      ],
<<<<<<< HEAD
      copyright: `Copyright © ${new Date().getFullYear()} My Project. Built with Docusaurus.`, // Update copyright
=======
      copyright: `Copyright © ${new Date().getFullYear()} My Project. Built with Docusaurus.`, // Consider updating copyright owner
>>>>>>> 2e08443 (update to deploy to github pages)
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
