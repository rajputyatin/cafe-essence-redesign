import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
        className,
      )}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    </span>
  );
}

export function SectionLabel({ index, children, className, indexClassName = "text-primary" }: { index: string; children: React.ReactNode; className?: string; indexClassName?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.22em]", className)}>
      <span className={cn("font-serif text-sm italic tracking-normal", indexClassName)}>{index}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}
