export function TechTags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
