import { lazy, type ComponentType } from 'react';
import {
  BrandPage,
  ColorsPage,
  FontsPage,
  LayoutPage,
  OverviewPage,
} from './foundations';

function lazyPage(load: () => Promise<ComponentType>) {
  return lazy(async () => ({ default: await load() }));
}

const ButtonDemo = lazyPage(() =>
  import('./demos/button').then(({ ButtonDemo }) => ButtonDemo),
);
const CardDemo = lazyPage(() =>
  import('./demos/card').then(({ CardDemo }) => CardDemo),
);
const InputDemo = lazyPage(() =>
  import('./demos/input').then(({ InputDemo }) => InputDemo),
);
const SwitchDemo = lazyPage(() =>
  import('./demos/switch').then(({ SwitchDemo }) => SwitchDemo),
);
const BadgeDemo = lazyPage(() =>
  import('./demos/badge').then(({ BadgeDemo }) => BadgeDemo),
);

export type PreviewEntry = {
  id: string;
  name: string;
  description: string;
  Page: ComponentType;
};

export type NavGroup = {
  name: string;
  entries: PreviewEntry[];
};

export const DESIGN_SYSTEM = {
  title: 'ARTYVERSE Assistant Design System',
  description:
    'A Thai-first visual language extracted from the ARTYVERSE X AI Assistant, with clear controls, calm surfaces, and responsive reading layouts.',
} as const;

export const OVERVIEW_ENTRY: PreviewEntry = {
  id: 'overview',
  name: 'Overview',
  description: 'The visual foundations and component families of the assistant.',
  Page: OverviewPage,
};

export const NAV_GROUPS: NavGroup[] = [
  {
    name: 'Brand',
    entries: [
      {
        id: 'brand-mark',
        name: 'Logo and color signature',
        description: 'The extracted ARTYVERSE mark and its wordmark pairing.',
        Page: BrandPage,
      },
    ],
  },
  {
    name: 'Colors',
    entries: [
      {
        id: 'color-roles',
        name: 'Color roles',
        description: 'Pink and lime brand roles, surfaces, and derived dark mode.',
        Page: ColorsPage,
      },
    ],
  },
  {
    name: 'Fonts',
    entries: [
      {
        id: 'type-scale',
        name: 'Type scale',
        description: 'Thai-first text hierarchy with clear Latin metadata.',
        Page: FontsPage,
      },
    ],
  },
  {
    name: 'Layout',
    entries: [
      {
        id: 'spacing-radius',
        name: 'Spacing and responsive layout',
        description: 'Spacing rhythm, surface radius, and desktop-to-mobile behavior.',
        Page: LayoutPage,
      },
    ],
  },
  {
    name: 'Actions',
    entries: [
      {
        id: 'button',
        name: 'Buttons',
        description: 'Primary, lime, outline, ghost, and icon actions.',
        Page: ButtonDemo,
      },
    ],
  },
  {
    name: 'Forms & controls',
    entries: [
      {
        id: 'form-controls',
        name: 'Form controls',
        description: 'Text, file, range, and source-selection controls.',
        Page: InputDemo,
      },
      {
        id: 'switch',
        name: 'Switches',
        description: 'Compact preference toggles with accessible states.',
        Page: SwitchDemo,
      },
    ],
  },
  {
    name: 'Surfaces',
    entries: [
      {
        id: 'card',
        name: 'Cards and panels',
        description: 'Question, script, and preference surfaces.',
        Page: CardDemo,
      },
    ],
  },
  {
    name: 'Status',
    entries: [
      {
        id: 'status',
        name: 'Status and badges',
        description: 'Listening, question, queue, and waveform indicators.',
        Page: BadgeDemo,
      },
    ],
  },
];

export const ALL_ENTRIES: PreviewEntry[] = [
  OVERVIEW_ENTRY,
  ...NAV_GROUPS.flatMap((group) => group.entries),
];

const duplicateIds = ALL_ENTRIES.map((entry) => entry.id).filter(
  (id, index, ids) => ids.indexOf(id) !== index,
);
if (duplicateIds.length > 0) {
  throw new Error(
    `Duplicate preview page id(s): ${[...new Set(duplicateIds)].join(', ')}.`,
  );
}
