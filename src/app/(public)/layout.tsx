import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-slate-400">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Strive CRM" className="h-8 w-auto object-contain" />
            <span className="text-lg font-bold tracking-tight text-foreground">Strive CRM</span>
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Strive CRM. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
