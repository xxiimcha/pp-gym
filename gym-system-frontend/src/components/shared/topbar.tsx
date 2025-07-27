import { Button } from "@/components/ui/button"

export default function Topbar() {
  return (
    <header className="w-full h-14 border-b flex items-center justify-between px-6 bg-white">
      <div className="font-medium">Welcome back!</div>
      <Button variant="outline">Logout</Button>
    </header>
  )
}
