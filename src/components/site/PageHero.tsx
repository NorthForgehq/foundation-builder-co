export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative -mt-20 pt-40 pb-20 lg:pt-48 lg:pb-28 bg-charcoal text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1200px 400px at 80% 0%, color-mix(in oklab, var(--brand) 30%, transparent), transparent), radial-gradient(800px 400px at 0% 100%, color-mix(in oklab, var(--brand) 15%, transparent), transparent)",
        }}
      />
      <div className="container-wide relative">
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1] tracking-tight max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}