# Component inventory

Source-backed by the existing ARTYVERSE X AI Assistant app. Source files use
semantic HTML and CSS classes rather than exported component modules. The
families below preserve the repeated interaction and styling patterns while
leaving app-specific screen composition in the consumer.

| Family | Reference | Dependencies / blockers | Evidence | Chunk | Status |
| --- | --- | --- | --- | --- | --- |
| Buttons | `components/button.md` | React; no behavior library in source | Header, pause, script, settings, and composer actions | 1 — pilot | complete |
| Cards and surfaces | `components/card.md` | React; no behavior library in source | Script card, question region, queue strip, settings surface | 1 — pilot | complete |
| Form controls | `components/form-controls.md` | React; native inputs in source | Composer textarea, attachment input, source selector, font range | 1 — pilot | complete |
| Switches | `components/switch.md` | React; native button with `role="switch"` in source | Auto-scroll and sentence-highlight preferences | 1 — pilot | complete |
| Status and badges | `components/status.md` | React; decorative waveform has no external dependency | Listening state, question tags, queue count, waveform | 1 — pilot | complete |

All five families form the first and only catalog chunk for this extraction. The
source contains no additional shared component library; layouts such as the
responsive settings sheet remain composition guidance rather than standalone
library components.
