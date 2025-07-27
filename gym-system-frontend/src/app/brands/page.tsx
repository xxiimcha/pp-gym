'use client'

import LayoutShell from "@/components/shared/layout-shell"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Brand {
  id: number
  name: string
  location: string
  email: string
  contact: string
  status: "Active" | "Inactive"
}

export default function BrandsPage() {
  const brands: Brand[] = [
    {
      id: 1,
      name: "FitZone",
      location: "Makati",
      email: "admin@fitzone.ph",
      contact: "0917-111-2233",
      status: "Active",
    },
    {
      id: 2,
      name: "MusclePro",
      location: "Quezon City",
      email: "hello@musclepro.com",
      contact: "0928-222-3344",
      status: "Inactive",
    },
    {
      id: 3,
      name: "CoreX",
      location: "Cebu",
      email: "support@corexgym.com",
      contact: "0999-333-4455",
      status: "Active",
    },
  ]

  const handleDelete = (id: number) => {
    // Temporary logic; later this can trigger a modal or API call
    alert(`Delete brand with ID: ${id}`)
  }

  return (
    <LayoutShell>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Brands</h1>
        <Button asChild>
          <Link href="/brands/new">Add Brand</Link>
        </Button>
      </div>

      <div className="bg-white rounded-lg border shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="whitespace-nowrap">ID</TableHead>
              <TableHead>Brand Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand.id} className="hover:bg-gray-50">
                <TableCell>{brand.id}</TableCell>
                <TableCell className="font-medium">{brand.name}</TableCell>
                <TableCell>{brand.location}</TableCell>
                <TableCell>{brand.email}</TableCell>
                <TableCell>{brand.contact}</TableCell>
                <TableCell>
                  <Badge
                    variant={brand.status === "Active" ? "default" : "secondary"}
                    className={brand.status === "Inactive" ? "text-gray-500" : ""}
                  >
                    {brand.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/brands/${brand.id}`}>View</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/brands/${brand.id}/edit`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(brand.id)} className="text-red-500">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </LayoutShell>
  )
}
