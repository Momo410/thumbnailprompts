export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-6 md:px-6">
        <div className="flex items-center gap-3">
          <img src="/brand/logo-mark-white.svg" alt="" aria-hidden="true" className="h-5 w-auto" />
          <p className="text-sm text-muted-foreground">© 2026 thumbnailprompts.com</p>
        </div>
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors duration-150 hover:text-foreground">
              X
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors duration-150 hover:text-foreground">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
