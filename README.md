# Flotilla Poll Proposal

This repository contains a polished Svelte + TypeScript + Tailwind CSS submission for the Flotilla Summer of Bitcoin competency test.

## What it does

- Presents a concrete proposal for adding polls to Flotilla
- References NIP-88 and the event kinds Flotilla should support
- Explains how polls fit the UI, sync model, command layer, and space architecture
- Provides a production-oriented presentation that is easy to submit and extend

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

The app is intentionally focused on the competency test brief: it argues for polls as a first-class content type, covers the UI placement in compose/feed/detail views, and keeps the implementation strategy aligned with Flotilla's relay-centric architecture.
