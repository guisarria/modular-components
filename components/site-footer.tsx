import { cn } from '@/lib/utils'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div>
        <p>Footer</p>
      </div>
    </footer>
  )
}
