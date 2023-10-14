export interface ColorScheme {
  background: string
  border: string
  heavyborder: string
  text: string
  header: string
  secondary: string
  tertiary: string
  highlight: string
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
  }
  colors: {
    lightMode: ColorScheme
    darkMode: ColorScheme
  }
}

const DEFAULT_SANS_SERIF =
  'Source Sans Pro, IBM Plex Sans, Fira Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
const DEFAULT_MONO = "ui-monospace, Source Code Pro, IBM Plex Mono, Fira Code, SFMono-Regular, SF Mono, Menlo, monospace"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --background: ${theme.colors.lightMode.background};
  --border: ${theme.colors.lightMode.border};
  --heavyborder: ${theme.colors.lightMode.heavyborder};
  --text: ${theme.colors.lightMode.text};
  --header: ${theme.colors.lightMode.header};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --highlight: ${theme.colors.lightMode.highlight};

  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --background: ${theme.colors.darkMode.background};
  --border: ${theme.colors.darkMode.border};
  --heavyborder: ${theme.colors.darkMode.heavyborder};
  --text: ${theme.colors.darkMode.text};
  --header: ${theme.colors.darkMode.header};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --highlight: ${theme.colors.darkMode.highlight};
}
`
}
