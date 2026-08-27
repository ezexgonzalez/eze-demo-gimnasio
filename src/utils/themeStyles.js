export function createThemeStyles(theme) {
  return {
    colorScheme: theme.mode,
    "--theme-background": theme.background,
    "--theme-surface": theme.surface,
    "--theme-elevated": theme.elevated,
    "--theme-border": theme.border,
    "--theme-text": theme.text,
    "--theme-secondary": theme.secondary,
    "--theme-muted": theme.muted,
    "--theme-accent": theme.accent,
    "--theme-accent-text": theme.accentText,
    "--theme-radius": theme.radius,
  }
}
