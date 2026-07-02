type HeroProps = {
  command: string;
  title: string;
  subtitle: string;
};

export function Hero({ command, title, subtitle }: HeroProps) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <p className="prompt mb-4 font-mono text-[13px] text-muted">{command}</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
