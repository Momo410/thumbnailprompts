const steps = [
  {
    n: '01',
    title: 'Connect the MCP',
    body: 'Add thumbnailprompts to Claude in one click.',
  },
  {
    n: '02',
    title: 'Ask for a thumbnail',
    body: 'Describe your video, and it picks a trending layout.',
  },
  {
    n: '03',
    title: 'Paste & generate',
    body: 'Run the prompt in ChatGPT or Gemini with your face photo.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 py-24 md:px-6">
        <h2 id="how-heading" className="text-[32px] leading-tight font-semibold tracking-[-0.02em] sm:text-[40px]">
          How it works
        </h2>
        <ol className="grid grid-cols-1 border-y border-border md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className={`flex flex-col gap-3 py-8 md:px-8 md:py-10 ${
                i > 0 ? 'border-t border-border md:border-t-0 md:border-l' : 'md:pl-0'
              }`}
            >
              <span className="font-mono text-xs text-muted-foreground">{step.n}</span>
              <h3 className="text-xl leading-snug font-semibold tracking-[-0.01em]">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
