"use client"

import LayoutShell from "@/components/shared/layout-shell"
import AddBranchModal from "@/components/branches/AddBranchModal"
import BranchTable from "@/components/branches/BranchTable"
import { useState } from "react"
import { initialBrands } from "@/lib/data/mockData"
import { Brand } from "@/lib/types"

export default function BranchesPage() {
  const [brands, setBrands] = useState<Brand[]>(initialBrands)

  return (
    <LayoutShell>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Branches</h1>
        <AddBranchModal brands={brands} setBrands={setBrands} />
      </div>

      <div className="space-y-10">
        {brands.map((brand) => (
          <BranchTable
            key={brand.id}
            brand={brand}
            setBrands={setBrands}
          />
        ))}
      </div>
    </LayoutShell>
  )
}
