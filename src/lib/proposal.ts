export type ProposalSection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type ArchitectureItem = {
  title: string;
  detail: string;
};

export type PollFlowStep = {
  title: string;
  detail: string;
};

export const keyFacts = [
  { label: 'Issue', value: '#77 polls' },
  { label: 'Recommended NIP', value: 'NIP-88' },
  { label: 'Primary kinds', value: '1068 / 1018' },
  { label: 'Product shape', value: 'First-class space content' },
];

export const proposalSections: ProposalSection[] = [
  {
    eyebrow: 'Proposal',
    title: 'Treat polls as a native content type, not a special message format.',
    body:
      'Flotilla already models spaces around distinct content types such as threads, classifieds, and events. Polls should follow the same rule: create, render, route, and sync them as a dedicated domain object so the UI stays predictable for casual users and the architecture stays consistent for maintainers.',
  },
  {
    eyebrow: 'Standard',
    title: 'Use NIP-88 as the interoperable contract.',
    body:
      'The proposal should explicitly reference NIP-88 for poll events (kind 1068) and poll responses (kind 1018). That keeps Flotilla aligned with the broader Nostr ecosystem while still allowing product-specific presentation choices such as compact cards, space-specific curation, and organizer controls.',
  },
  {
    eyebrow: 'UX',
    title: 'Make voting visible where users already read content.',
    body:
      'Users should be able to vote directly from the poll card in feed, room, and space views. The detail page can expand on results, metadata, and discussion, but the core interaction should never require opening a separate route first. That keeps polling lightweight enough for chat-like spaces.',
  },
];

export const architecture: ArchitectureItem[] = [
  {
    title: 'Domain parsing',
    detail:
      'Add a small poll helper module that parses option tags, end times, poll type, and result events into typed view models. Keep the NIP-specific logic out of Svelte components.',
  },
  {
    title: 'Content registry',
    detail:
      'Register poll kind support alongside existing content kinds so routing, recent activity, sync, and search all understand polls as first-class entities.',
  },
  {
    title: 'Command layer',
    detail:
      'Publish poll creation and vote events through the command layer, not directly from UI components. That preserves testability and keeps signing / relay selection policy in one place.',
  },
  {
    title: 'Sync strategy',
    detail:
      'Sync the poll event and response events together so vote counts update live, but cap the query scope to relays declared by the poll and the active space policy.',
  },
];

export const uiFlow: PollFlowStep[] = [
  {
    title: 'Compose',
    detail: 'Add a poll action to the compose menu that opens a focused poll editor with option rows, type toggle, and end time.',
  },
  {
    title: 'Surface',
    detail: 'Render a compact poll card in feeds and room timelines with option pills, live counts, and a clear closed/open state.',
  },
  {
    title: 'Detail',
    detail: 'Use the detail page for explanation, discussion, and a fuller results breakdown, including who can vote and when voting closes.',
  },
  {
    title: 'Moderate',
    detail: 'Respect space policy for where polls may be created and who may participate, so organizers can use polls without losing control of the community.',
  },
];

export const proposalText = `Flotilla poll proposal\n\nUse NIP-88 as the interoperable poll contract. Poll events live as kind 1068 with option, relay, polltype, and endsAt tags. Responses are kind 1018 events with an e tag that references the poll plus one or more response tags.\n\nProduct decision: polls should be treated as a first-class space content type, alongside existing content like threads and classifieds. That means poll data should be parsed in the domain layer, routed like other content, synchronized with space data, and rendered through dedicated Svelte components.\n\nUI shape: users should create polls from the compose menu, vote directly from the poll card, and use the detail page for longer context and live results. The card must show the question, choices, participation state, and an obvious open/closed indicator. The detail page can add richer result breakdowns and discussion context without making the basic interaction heavier.\n\nArchitecture: keep NIP parsing and vote aggregation in a poll utility module. Publish events through the command layer so signing and relay policy stay centralized. Wire polls into route generation, title handling, recent activity, and sync flows the same way other content kinds are wired today.\n\nOperational note: result counting should follow NIP-88 guidance by treating the latest valid vote per pubkey as authoritative, respecting poll expiration, and limiting visibility to the relays declared by the poll or the active space policy.\n\nThis approach preserves Flotilla's model of relays as groups while giving communities a native, easy-to-discover poll experience.`;
