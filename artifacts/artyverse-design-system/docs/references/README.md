# ARTYVERSE Assistant references

| File | Subject | Kind | Source | Extracted use |
| --- | --- | --- | --- | --- |
| `artyverse-assistant-ui.png` | Assistant conversation across tablet and mobile, including reading settings | `app-ui` | User-provided reference image | Light surfaces, pink and lime roles, Thai-first hierarchy, compact controls, docked tablet settings, and mobile bottom sheet |
| `logos/artyverse-mark.svg` | ARTYVERSE brand mark | `brand-asset` | Reconstructed from the app's CSS polygons in `artifacts/artyverse-assistant/src/index.css` | Pink angular mark with lime accent; pair with the ARTYVERSE wordmark |

## Source code

The component inventory and implementation evidence come from the existing
workspace app:

- `artifacts/artyverse-assistant/src/App.tsx`
- `artifacts/artyverse-assistant/src/index.css`

The source application uses inline semantic elements and CSS classes rather than
a published component package. The catalog groups those repeated patterns into
five reusable families without changing the source application.

## Notes

- Typography is loaded from Google Fonts in the source app: IBM Plex Sans Thai
  for Thai-first UI copy and Space Grotesk for compact Latin labels and figures.
- The source app has no dark theme. The dark token set in this package is a
  derived alternative and is not represented as a source-faithful mode.
- The supplied master JSON and v23 HTML describe other dark/lime and
  beige/indigo-orange palettes. They do not match the selected reference image or
  current app CSS, so this extraction follows the screenshot and current app.
- No third-party component implementation was copied into this package.
