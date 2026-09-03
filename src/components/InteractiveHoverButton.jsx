import { ArrowRight } from 'lucide-react'

export function InteractiveHoverButton({ children = 'Button', className = '', ...props }) {
  return (
    <button
      type="button"
      className={`group relative w-fit cursor-pointer overflow-hidden rounded-full border border-border bg-background px-6 py-3 text-center font-semibold text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-[28] group-focus-visible:scale-[28]" />
        <span className="transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-0 group-focus-visible:translate-x-10 group-focus-visible:opacity-0">
          {children}
        </span>
      </span>
      <span
        className="pointer-events-none absolute inset-0 z-20 flex translate-x-10 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        aria-hidden="true"
      >
        <span>{children}</span>
        <ArrowRight size={16} strokeWidth={2.2} />
      </span>
    </button>
  )
}
