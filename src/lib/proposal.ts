export type ApproachStep = {
  step: string;
  title: string;
  detail: string;
  deliverable: string;
};

export type UiPlacement = {
  surface: string;
  behavior: string;
  reason: string;
};

export type ArchitectureBlock = {
  block: string;
  responsibilities: string[];
};

export const keyFacts = [
  { label: 'Issue', value: 'coracle/flotilla#77' },
  { label: 'NIP reference', value: 'NIP-88 (Polls)' },
  { label: 'Poll kind', value: '1068' },
  { label: 'Vote kind', value: '1018' },
];

export const approachSteps: ApproachStep[] = [
  {
    step: '01',
    title: 'Define the protocol contract first',
    detail:
      'Use NIP-88 as the source of truth: poll options from option tags, voting period from endsAt, and response selection from response tags.',
    deliverable: 'A typed poll utility module that parses and validates NIP-88 events.',
  },
  {
    step: '02',
    title: 'Add polls as a first-class content type',
    detail:
      'Register poll kinds in content-kind routing/state so they appear naturally in spaces, recent activity, and sync flows instead of being treated as generic notes.',
    deliverable: 'Poll-aware routing, titles, and content-kind registration.',
  },
  {
    step: '03',
    title: 'Ship core UX in three surfaces',
    detail:
      'Creation from compose menu, voting from feed card, and richer context in the detail page. This keeps the interaction fast while preserving deeper drill-down.',
    deliverable: 'PollCreate, PollCard, and PollDetail views with unified data models.',
  },
  {
    step: '04',
    title: 'Keep publish/sync logic in core layers',
    detail:
      'Publish and vote through command handlers, and aggregate results during sync using the latest vote per pubkey as defined by NIP-88 guidance.',
    deliverable: 'Command + sync integration that remains testable and maintainable.',
  },
];

export const uiPlacements: UiPlacement[] = [
  {
    surface: 'Compose menu',
    behavior: 'Add a "Poll" action with question, options, type, and close-time controls.',
    reason: 'Matches existing authoring flow and keeps poll creation discoverable.',
  },
  {
    surface: 'Feed / room card',
    behavior: 'Allow direct voting and show live state (open/closed + counts) in-line.',
    reason: 'Prevents extra navigation and increases participation in chat-heavy spaces.',
  },
  {
    surface: 'Poll detail route',
    behavior: 'Show full results, context, and threaded discussion around the poll.',
    reason: 'Supports organizer workflows without cluttering timeline cards.',
  },
];

export const architectureBlocks: ArchitectureBlock[] = [
  {
    block: 'Domain layer',
    responsibilities: [
      'Parse poll + response events',
      'Normalize single/multiple choice behavior',
      'Determine closed/open state from endsAt',
    ],
  },
  {
    block: 'Command layer',
    responsibilities: [
      'Publish kind 1068 poll events',
      'Publish kind 1018 vote responses',
      'Keep signing and relay policy centralized',
    ],
  },
  {
    block: 'UI + routing layer',
    responsibilities: [
      'Render poll card + detail page',
      'Integrate in space menus and recent activity',
      'Subscribe/sync poll events by active space policy',
    ],
  },
];
