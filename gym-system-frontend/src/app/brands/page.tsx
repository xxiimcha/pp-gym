'use client'

import LayoutShell from "@/components/shared/layout-shell"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Brand {
  id: number
  name: string
  location: string
}

export default function BrandsPage() {
  const brands: Brand[] = [
    { id: 1, name: "FitZone", location: "Makati" },
    { id: 2, name: "MusclePro", location: "Quezon City" },
    { id: 3, name: "CoreX", location: "Cebu" },
  ]

  return (
    <LayoutShell>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Brands</h1>
        <Button asChild>
          <Link href="/brands/new">Add Brand</Link>
        </Button>
      </div>

      <div className="bg-white rounded-lg border shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Brand Name</th>
              <th className="px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand.id} className="border-t">
                <td className="px-4 py-2">{brand.id}</td>
                <td className="px-4 py-2">{brand.name}</td>
                <td className="px-4 py-2">{brand.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutShell>
  )
}
