const rowA = [
  'Short form',
  'Long form',
  'Motion graphics',
  'Sports content',
  'Podcasts',
  'Branded series',
]
const rowB = [
  'Paid ads',
  'Scriptwriting',
  'Social cutdowns',
  'Thumbnails',
  'Color & sound',
  'Channel management',
]

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const line = [...items, ...items]
  return (
    <div className="marquee-wrap relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className="flex w-max animate-marquee items-center"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {line.map((t, i) => (
          <span key={t + i} className="flex items-center">
            <span className="font-display whitespace-nowrap px-6 text-4xl font-extrabold tracking-[-0.02em] text-transparent [-webkit-text-stroke:1px_rgba(234,241,251,0.22)] sm:text-6xl">
              {t}
            </span>
            <span className="text-2xl text-cyan sm:text-4xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-16 sm:py-20">
      <p className="mb-9 text-center text-xs font-semibold uppercase tracking-[0.28em] text-cyan-bright">
        Everything we make
      </p>
      <div className="space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  )
}
