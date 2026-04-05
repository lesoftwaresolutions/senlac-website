interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
}

export default function PageHero({ title, subtitle, bgColor = "bg-secondary" }: PageHeroProps) {
  return (
    <section className={`${bgColor} pt-28 pb-14 text-center`}>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-primary/30 block" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 block" />
          <span className="h-px w-12 bg-primary/30 block" />
        </div>
      </div>
    </section>
  );
}
