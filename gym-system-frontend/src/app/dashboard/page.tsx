import LayoutShell from "@/components/shared/layout-shell"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <LayoutShell>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Brands</p>
            <h2 className="text-2xl font-bold">6</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Active Branches</p>
            <h2 className="text-2xl font-bold">18</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Registered Members</p>
            <h2 className="text-2xl font-bold">1,024</h2>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow p-6 text-gray-700">
        <h3 className="text-lg font-semibold mb-2">Welcome back!</h3>
        <p className="text-sm">
          This is a sample dashboard view. In this system, you can manage multiple gym brands, their respective branches, and thousands of members.
        </p>
      </div>
    </LayoutShell>
  )
}
