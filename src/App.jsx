const products = [
  {
    name: 'Session Atlas',
    summary: 'Collaboration and session organization with DAW integration.',
    description:
      'Keep references, arrangement notes, approvals, and version history tied directly to each production session.',
    status: 'Open source',
    tags: ['DAW-linked', 'Shared notes', 'Version aware'],
    ctaLabel: 'View on GitHub',
    href: 'https://github.com/jamtoolsco/session-atlas',
    accent: 'warm',
  },
  {
    name: 'Bounce Ferry',
    summary: 'Automatic DAW bounce workflows for stems, mixes, and review files.',
    description:
      'Watch a session, trigger exports, and hand clean bounces back to the team without repetitive render duty.',
    status: 'Open source',
    tags: ['Auto-bounce', 'Stem export', 'Review ready'],
    ctaLabel: 'View on GitHub',
    href: 'https://github.com/jamtoolsco/bounce-ferry',
    accent: 'cool',
  },
  {
    name: 'Piano Halo',
    summary: 'Passive piano capture that remembers what happened before record.',
    description:
      'A rolling recorder for practice rooms and writing sessions so accidental keepers survive even when you were still warming up.',
    status: 'Private beta',
    tags: ['Passive capture', 'Idea recovery', 'Studio piano'],
    ctaLabel: 'Request access',
    href: 'mailto:hello@jamtools.dev?subject=Piano%20Halo%20beta',
    accent: 'warm',
  },
  {
    name: 'Chord Beacon',
    summary: 'Fast chord communication for rehearsals, pits, and live sets.',
    description:
      'Turn arrangement cues into clear harmonic prompts that performers can read instantly without stopping the room.',
    status: 'Open source',
    tags: ['Performance cues', 'Large format', 'Live-friendly'],
    ctaLabel: 'View on GitHub',
    href: 'https://github.com/jamtoolsco/chord-beacon',
    accent: 'cool',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Catch the idea',
    description:
      'Piano Halo keeps a rolling memory of sketches and exports moments worth saving before they disappear.',
  },
  {
    step: '02',
    title: 'Organize the room',
    description:
      'Session Atlas becomes the shared source of truth for files, decisions, and DAW-adjacent context.',
  },
  {
    step: '03',
    title: 'Render automatically',
    description:
      'Bounce Ferry picks up the approved session state and generates mixes, stems, and client-ready previews.',
  },
  {
    step: '04',
    title: 'Communicate on stage',
    description:
      'Chord Beacon reuses the same harmonic structure so performers stay aligned during rehearsal and performance.',
  },
]

const values = [
  {
    title: 'Musician-first speed',
    description:
      'The software should disappear quickly enough that a room full of players stays in flow.',
  },
  {
    title: 'Interop is a feature',
    description:
      'Our tools are intentionally narrow, but they share enough language to feel like one system.',
  },
  {
    title: 'Open by default',
    description:
      'Three of the four products live on GitHub because trust, extensibility, and contribution matter.',
  },
]

const socials = [
  {
    name: 'GitHub',
    detail: 'Open-source repos and issue tracking',
    href: 'https://github.com/jamtoolsco',
  },
  {
    name: 'YouTube',
    detail: 'Walkthroughs and release demos',
    href: 'https://www.youtube.com/@jamtoolsco',
  },
  {
    name: 'Instagram',
    detail: 'Studio clips, product peeks, and sessions',
    href: 'https://www.instagram.com/jamtoolsco',
  },
  {
    name: 'Bluesky',
    detail: 'Release notes and dev updates',
    href: 'https://bsky.app/profile/jamtoolsco.bsky.social',
  },
]

function App() {
  return (
    <div id="top" className="pb-16">
      <header className="mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8 lg:px-10">
        <nav className="glass-panel reveal flex items-center justify-between gap-4 rounded-full px-5 py-3">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-soft)] text-base">
              JT
            </span>
            <span className="hidden sm:inline">JAM TOOLS</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#products">Products</a>
            <a href="#workflow">Workflow</a>
            <a href="#story">Story</a>
            <a href="#values">Values</a>
          </div>

          <a
            href="https://github.com/jamtoolsco"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 pt-6 sm:px-8 lg:px-10">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)]">
          <div className="glass-panel tone-grid reveal relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="hero-glow warm absolute -left-16 top-0 h-48 w-48 rounded-full blur-3xl" />
            <div className="hero-glow cool absolute right-0 top-8 h-56 w-56 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                <span className="badge-warm rounded-full px-3 py-2">4 focused tools</span>
                <span className="badge-cool rounded-full px-3 py-2">3 open source on GitHub</span>
                <span className="rounded-full border border-[var(--border)] px-3 py-2">
                  Adapts to light and dark OS themes
                </span>
              </div>

              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Music software for rooms that move fast</p>
                <h1 className="display-type max-w-4xl text-5xl leading-[0.94] sm:text-6xl lg:text-[5.25rem]">
                  Keep the band, the bounce, and the idea in the same conversation.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                  Jam Tools makes software for collaborative music work: session organization
                  with DAW integration, automatic bounces, passive piano capture, and real-time
                  chord communication during performance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="rounded-full bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5"
                >
                  Explore the tools
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                >
                  Read our story
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="section-card rounded-[1.5rem] p-4">
                  <p className="eyebrow mb-2">Sessions</p>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    Shared notes, approvals, and references directly around the DAW session.
                  </p>
                </div>
                <div className="section-card rounded-[1.5rem] p-4">
                  <p className="eyebrow mb-2">Delivery</p>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    Automatic stems, mixes, and review exports instead of manual render chores.
                  </p>
                </div>
                <div className="section-card rounded-[1.5rem] p-4">
                  <p className="eyebrow mb-2">Performance</p>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    Chord prompts and harmonic handoff tools for rehearsals and live moments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="section-card reveal delay-1 rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="eyebrow mb-2">Stack logic</p>
                  <h2 className="text-2xl font-semibold">Better together</h2>
                </div>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  Interoperable
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {workflow.map((item) => (
                  <div key={item.step} className="signal-step rounded-[1.25rem] p-4">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--text)] text-xs font-semibold text-[var(--bg)]">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card reveal delay-2 rounded-[2rem] p-6 sm:p-7">
              <p className="eyebrow mb-2">Open-source posture</p>
              <h2 className="text-2xl font-semibold">Open by default, selective where it counts.</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                Three products are open source on GitHub. Piano Halo is the one exception while we
                keep its capture pipeline in private beta and iterate with working studios.
              </p>
            </div>
          </aside>
        </section>

        <section
          id="products"
          className="glass-panel reveal delay-1 rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Products</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Four tools for four kinds of friction</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Each product can stand alone. The stronger pattern is using them as a chain from
              sketch to session to bounce to performance.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="section-card product-card rounded-[1.75rem] p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="eyebrow mb-2">{product.status}</p>
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] ${
                      product.accent === 'warm' ? 'badge-warm' : 'badge-cool'
                    }`}
                  >
                    {product.summary}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={product.href}
                    target={product.href.startsWith('http') ? '_blank' : undefined}
                    rel={product.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
                  >
                    {product.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        >
          <div id="story" className="section-card reveal delay-2 rounded-[2rem] p-6 sm:p-8">
            <p className="eyebrow mb-3">Story</p>
            <h2 className="display-type text-4xl leading-tight sm:text-5xl">
              We started by passing scripts around rehearsal rooms.
            </h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)]">
              Jam Tools grew out of tiny utilities shared between producers, music directors, and
              pianists who kept running into the same friction: scattered notes, forgotten bounces,
              lost improvisations, and chord instructions that were too vague when the room was
              moving quickly.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Instead of building one bloated workstation, we built a family of narrow tools with a
              shared vocabulary. That gives teams a lighter stack and a cleaner handoff between
              writing, tracking, review, and performance.
            </p>
          </div>

          <div className="glass-panel reveal delay-3 rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow mb-3">System view</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">One idea, several surfaces</h2>
              </div>
              <span className="rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Idea to performance
              </span>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                'Piano Halo recovers an accidental phrase and exports a clip worth keeping.',
                'Session Atlas anchors that clip to the project, notes the decision, and shares it with the team.',
                'Bounce Ferry publishes updated mixes and stems the moment the arrangement locks.',
                'Chord Beacon carries the harmonic map onto the stand when the chart reaches rehearsal.',
              ].map((item, index) => (
                <div key={item} className="signal-step rounded-[1.5rem] p-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-sm font-semibold text-[var(--muted)]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 sm:text-base">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="values"
          className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        >
          <div className="section-card reveal rounded-[2rem] p-6 sm:p-8">
            <p className="eyebrow mb-3">Values</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">What we optimize for</h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              Our products live in rooms where people are listening, not browsing settings. That
              shapes the way we design, ship, and decide what to leave out.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`section-card reveal rounded-[1.75rem] p-6 delay-${index + 1}`}
              >
                <p className="eyebrow mb-3">0{index + 1}</p>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="glass-panel reveal delay-2 rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="eyebrow mb-3">Socials</p>
              <h2 className="display-type text-4xl leading-tight sm:text-5xl">
                Follow the releases, demos, and build logs.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
                Jam Tools is built in public as much as possible. GitHub is where the code lives.
                The other channels are where the process, performance clips, and release demos show
                up.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link section-card rounded-[1.5rem] p-5"
                >
                  <p className="eyebrow mb-2">{social.name}</p>
                  <p className="text-lg font-semibold">{social.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
