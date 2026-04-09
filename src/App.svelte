<script lang="ts">
  import { architecture, keyFacts, proposalSections, proposalText, uiFlow } from './lib/proposal';
</script>

<svelte:head>
  <title>Flotilla Poll Proposal</title>
</svelte:head>

<div class="relative min-h-screen overflow-hidden text-slate-100">
  <div class="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_40%),radial-gradient(circle_at_70%_20%,_rgba(34,197,94,0.16),_transparent_28%)]"></div>

  <main class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
      <div class="rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-10">
        <p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300/80">Summer of Bitcoin competency test</p>
        <h1 class="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          A production-ready poll proposal for Flotilla.
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          This project turns the issue into a polished submission artifact: a concise product proposal,
          a clear architectural plan, and a UI direction that fits Flotilla's chat-first, space-centric model.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            class="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            href="https://nips.nostr.com/88"
            target="_blank"
            rel="noreferrer"
          >
            Reference NIP-88
          </a>
          <a
            class="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
            href="https://gitea.coracle.social/coracle/flotilla/issues/77"
            target="_blank"
            rel="noreferrer"
          >
            Open issue 77
          </a>
        </div>

        <div class="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {#each keyFacts as fact}
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.24em] text-slate-400">{fact.label}</p>
              <p class="mt-2 text-lg font-medium text-white">{fact.value}</p>
            </div>
          {/each}
        </div>
      </div>

      <aside class="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/30 backdrop-blur-xl sm:p-8">
        <p class="text-sm font-medium uppercase tracking-[0.28em] text-emerald-300/80">Submission summary</p>
        <div class="mt-4 space-y-4 text-sm leading-6 text-slate-300">
          <p>
            The proposal is centered on a single idea: polls should feel native in Flotilla, not like an embedded
            external primitive.
          </p>
          <p>
            Using NIP-88 keeps the event shape portable across relays, while Flotilla-specific presentation lives in
            the UI layer.
          </p>
          <p>
            The app below is the written artifact you can submit with the competency test, and it is structured to be
            easy to extend into a portfolio piece.
          </p>
        </div>

        <div class="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
          <p class="font-semibold text-white">Recommended NIP reference</p>
          <p class="mt-1">Mention NIP-88 directly and explain that vote counting follows the latest vote per pubkey rule.</p>
        </div>
      </aside>
    </section>

    <section class="grid gap-5 lg:grid-cols-3">
      {#each proposalSections as section}
        <article class="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-lg shadow-black/20 backdrop-blur-md">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300/75">{section.eyebrow}</p>
          <h2 class="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
          <p class="mt-4 text-sm leading-7 text-slate-300">{section.body}</p>
        </article>
      {/each}
    </section>

    <section class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <article class="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/25 backdrop-blur-xl sm:p-8">
        <p class="text-sm font-medium uppercase tracking-[0.26em] text-emerald-300/75">Architecture</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">Keep the NIP logic in the domain layer.</h2>
        <div class="mt-6 grid gap-4">
          {#each architecture as item}
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 class="text-lg font-semibold text-white">{item.title}</h3>
              <p class="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
            </div>
          {/each}
        </div>
      </article>

      <article class="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/25 backdrop-blur-xl sm:p-8">
        <p class="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300/75">UI plan</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">The vote should happen where the conversation is happening.</h2>
        <div class="mt-6 space-y-4">
          {#each uiFlow as step, index}
            <div class="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-200">
                {index + 1}
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">{step.title}</h3>
                <p class="mt-1 text-sm leading-7 text-slate-300">{step.detail}</p>
              </div>
            </div>
          {/each}
        </div>
      </article>
    </section>

    <section class="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[1fr_1.2fr] sm:p-8">
      <div>
        <p class="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300/75">Draft text</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">A concise proposal paragraph for the submission.</h2>
        <p class="mt-4 text-sm leading-7 text-slate-300">
          The text below is ready to use in the competency submission itself, which makes the project self-contained
          and practical instead of purely decorative.
        </p>
      </div>
      <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
        <pre class="whitespace-pre-wrap text-sm leading-7 text-slate-200">{proposalText}</pre>
      </div>
    </section>
  </main>
</div>
