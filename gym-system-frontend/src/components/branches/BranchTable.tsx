"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Eye, Pencil, Trash2 } from "lucide-react"
import { useBranchExpand } from "@/lib/hooks/useBranchExpand"
import StaffList from "./StaffList"
import type { Brand } from "@/lib/types"

interface BranchTableProps {
  brand: Brand
  setBrands?: (brands: Brand[]) => void
}

export default function BranchTable({ brand }: BranchTableProps) {
  const { expandedIds, toggleExpand } = useBranchExpand()

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">{brand.name}</h2>

      <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Branch Name</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
              <th className="px-4 py-3">Staff</th>
            </tr>
          </thead>
          <tbody>
            {brand.branches.map((branch) => (
              <React.Fragment key={branch.id}>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{branch.id}</td>
                  <td className="px-4 py-2 font-medium">{branch.name}</td>
                  <td className="px-4 py-2">{branch.address}</td>
                  <td className="px-4 py-2">{branch.contact}</td>
                  <td className="px-4 py-2">
                    <Badge variant={branch.status === "Active" ? "default" : "secondary"}>
                      {branch.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <Button size="sm" variant="outline">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                  <td className="px-4 py-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleExpand(branch.id)}
                    >
                      {expandedIds.includes(branch.id) ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </td>
                </tr>

                {expandedIds.includes(branch.id) && (
                  <tr className="border-t bg-gray-50" key={`staff-${branch.id}`}>
                    <td colSpan={7} className="px-6 py-4">
                      <StaffList staff={branch.staff} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
