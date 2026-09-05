export default function Section({ id, index, label, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 md:px-10 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-lime">{index}</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-white">{label}</span>
      </div>
      <div className="section-rule" />
      <div className="mt-12">{children}</div>
    </section>
  )
}
