import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
// import "dotenv/config"

const config: Config = {
  title: "Thor Docs",
  tagline: "Documentation of IoT Cloud Network by Thor Electronics",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  // url: "https://docs.thor-electronics.ir",
  url: "https://thor-electronics.github.io",
  // url: "https://thor-electronics.ir", // todo: .com?
  baseUrl: "/docs",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Thor-Electronics", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  // deploymentBranch: "gh-pages",
  trailingSlash: false, // wtf is this?

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "crossorigin", // todo: does it work?
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        "data-ignore-embed": "true",
        href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa"],
    localeConfigs: {
      fa: {
        direction: "rtl",
        // htmlLang: "fa-IR",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/troweb/documentation/tree/main/",
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          routeBasePath: "/", // /docs
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editLocalizedFiles: true,
          editCurrentVersion: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/troweb/documentation/tree/main/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo-blue.jpg",
    navbar: {
      title: "Thor Electronics",
      logo: {
        alt: "thor-electronics-documentation-logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Get Started",
        },
        {
          position: "left",
          label: "Concepts",
          to: "/concepts",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Thor-Electronics/docs",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus",
            // },
            {
              label: "Instagram",
              href: "https://instagram.com/thorelectronic",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/Thor-Electronics/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Thor Electronics LLC.`, //  Built with Docusaurus.
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
