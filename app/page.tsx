import { ModeToggle } from '@/components/mode-toggle'
import { BarChartTest } from '@/components/test'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button className="">Click Me!</Button>
      <ModeToggle />
      <BarChartTest />
    </main>
  )
}
