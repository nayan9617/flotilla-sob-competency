<script lang="ts">
  import { approachSteps, architectureBlocks, futurePlan, keyFacts, uiPlacements } from './lib/proposal';
</script>

<svelte:head>
  <title>Flotilla Poll Proposal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="proposal-shell min-h-screen">
  <main class="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-8 sm:py-12">
    <section class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Flotilla competency submission</p>
      <h1 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Polls in Flotilla: implementation approach
      </h1>
      <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        This proposal addresses issue #77 by defining how NIP-88 polls should be integrated into Flotilla's UI and
        architecture as a first-class content type.
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          class="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          href="https://gitea.coracle.social/coracle/flotilla/issues/77"
          target="_blank"
          rel="noreferrer"
        >
          Issue #77
        </a>
        <a
          class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          href="https://nips.nostr.com/88"
          target="_blank"
          rel="noreferrer"
        >
          NIP-88 reference
        </a>
      </div>

      <div class="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {#each keyFacts as fact}
          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p class="text-[11px] uppercase tracking-[0.2em] text-slate-500">{fact.label}</p>
            <p class="mt-1 text-sm font-semibold text-slate-900">{fact.value}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">Approach plan</h2>
      <p class="mt-2 text-sm leading-7 text-slate-600">
        The implementation is staged so protocol correctness comes first, then integration, then UX polish.
      </p>

      <div class="mt-6 space-y-4">
        {#each approachSteps as item}
          <article class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs font-semibold tracking-[0.18em] text-teal-700">STEP {item.step}</p>
            <h3 class="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p class="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
            <p class="mt-2 text-sm font-medium text-slate-800">Deliverable: {item.deliverable}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-2">
      <article class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900">UI placement</h2>
        <div class="mt-5 space-y-4">
          {#each uiPlacements as row}
            <div class="rounded-2xl border border-slate-200 p-4">
              <p class="text-sm font-semibold text-slate-900">{row.surface}</p>
              <p class="mt-1 text-sm text-slate-700"><span class="font-medium">Behavior:</span> {row.behavior}</p>
              <p class="mt-1 text-sm text-slate-600"><span class="font-medium">Why:</span> {row.reason}</p>
            </div>
          {/each}
        </div>
      </article>

      <article class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900">Architecture diagram</h2>
        <p class="mt-2 text-sm leading-7 text-slate-600">
          Polls should move through three explicit layers to keep business logic out of components.
        </p>

        <div class="mt-5 flex flex-col gap-3">
          {#each architectureBlocks as block, index}
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-sm font-semibold text-slate-900">{block.block}</p>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {#each block.responsibilities as responsibility}
                  <li>{responsibility}</li>
                {/each}
              </ul>
            </div>
            {#if index < architectureBlocks.length - 1}
              <p class="text-center text-sm text-slate-500" aria-hidden="true">↓</p>
            {/if}
          {/each}
        </div>
      </article>
    </section>

    <section class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">Future plan</h2>
      <p class="mt-2 text-sm leading-7 text-slate-600">
        After core poll support is shipped, the next milestones focus on trust, organizer productivity, and broader
        interoperability.
      </p>

      <div class="mt-6 grid gap-4 md:grid-cols-2">
        {#each futurePlan as item}
          <article class="rounded-2xl border border-slate-200 p-5">
            <p class="text-xs font-semibold tracking-[0.18em] text-teal-700">{item.phase}</p>
            <h3 class="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p class="mt-2 text-sm text-slate-700"><span class="font-medium">Impact:</span> {item.impact}</p>
            <p class="mt-2 text-sm leading-7 text-slate-600">{item.scope}</p>
          </article>
        {/each}
      </div>
    </section>
  </main>
</div>
