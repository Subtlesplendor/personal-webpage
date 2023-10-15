import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Johan Lövgren",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "subtlesplendor.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Source Sans Pro",
        body: "Source Serif Pro",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          background: "#FFFCF0",
          border: "#DAD8CE",
          heavyborder: "#B7B5AC",
          text: "#100F0F",
          header: "#100F0F",
          secondary: "#24837B",
          tertiary: "#205EA6",
          highlight: "#FCEEB8",
        },
        darkMode: {
          background: "#100F0F",
          border: "#878580",
          heavyborder: "#575653",
          text: "#CECDC3",
          header: "#CECDC3",
          secondary: "#3AA99F",
          tertiary: "#4385BE",
          highlight: "#D0A215",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "local" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config