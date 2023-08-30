import { ModeToggle } from '@/components/mode-toggle'
import { BarChartTest, Test2 } from '@/components/test'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button className="">Click Me!</Button>
      <BarChartTest />
      <Test2 />
    </main>
  )
}
