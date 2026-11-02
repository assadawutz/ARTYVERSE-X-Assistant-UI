/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#f7f9fc",
      "foreground": "#1d2749",
      "border": "#e5eaf2",
      "card": "#ffffff",
      "cardForeground": "#24304f",
      "popover": "#ffffff",
      "popoverForeground": "#24304f",
      "primary": "#d90e73",
      "primaryForeground": "#ffffff",
      "secondary": "#f3f7ff",
      "secondaryForeground": "#24304f",
      "muted": "#f4f7fc",
      "mutedForeground": "#56617b",
      "accent": "#c4ef22",
      "accentForeground": "#243000",
      "destructive": "#a52436",
      "destructiveForeground": "#ffffff",
      "input": "#e3e8f0",
      "ring": "#d90e73",
      "chart1": "#d90e73",
      "chart2": "#a9e51d",
      "chart3": "#25304d",
      "chart4": "#169f99",
      "chart5": "#7764d8",
      "sidebar": "#ffffff",
      "sidebarForeground": "#24304f",
      "sidebarBorder": "#e5eaf2",
      "sidebarPrimary": "#d90e73",
      "sidebarPrimaryForeground": "#ffffff",
      "sidebarAccent": "#fff1f8",
      "sidebarAccentForeground": "#24304f",
      "sidebarRing": "#d90e73"
    },
    "dark": {
      "background": "#151625",
      "foreground": "#f5f7fc",
      "border": "#34374b",
      "card": "#202237",
      "cardForeground": "#f5f7fc",
      "popover": "#202237",
      "popoverForeground": "#f5f7fc",
      "primary": "#ff4ea5",
      "primaryForeground": "#25131f",
      "secondary": "#292c41",
      "secondaryForeground": "#f1f3fb",
      "muted": "#292c41",
      "mutedForeground": "#b0b5c8",
      "accent": "#c8f126",
      "accentForeground": "#242b0a",
      "destructive": "#ff6878",
      "destructiveForeground": "#29171c",
      "input": "#3b3e53",
      "ring": "#ff4ea5",
      "chart1": "#ff4ea5",
      "chart2": "#c8f126",
      "chart3": "#8ca8ff",
      "chart4": "#43d4c9",
      "chart5": "#c2a3ff",
      "sidebar": "#191b2d",
      "sidebarForeground": "#f5f7fc",
      "sidebarBorder": "#34374b",
      "sidebarPrimary": "#ff4ea5",
      "sidebarPrimaryForeground": "#25131f",
      "sidebarAccent": "#292c41",
      "sidebarAccentForeground": "#f5f7fc",
      "sidebarRing": "#ff4ea5"
    }
  },
  "fontFamily": {
    "sans": [
      "IBM Plex Sans Thai",
      "Space Grotesk",
      "sans-serif"
    ],
    "serif": [
      "Georgia",
      "serif"
    ],
    "mono": [
      "Space Grotesk",
      "monospace"
    ]
  },
  "radius": "0.85rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
