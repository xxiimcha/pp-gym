"use client"

import { Button } from "@/components/ui/button"
import { Eye, Trash2 } from "lucide-react"

interface Staff {
  id: number
  name: string
  role: string
  email: string
  contact: string
}

interface StaffListProps {
  staff: Staff[]
}

export default function StaffList({ staff }: StaffListProps) {
  return (
    <div>
      <h4 className="text-md font-medium mb-3">Staff Members</h4>
      {staff.length === 0 ? (
        <p className="text-sm text-gray-500">No staff assigned.</p>
      ) : (
        <ul className="space-y-2">
          {staff.map((member) => (
            <li
              key={member.id}
              className="flex justify-between items-center border px-4 py-2 rounded-md bg-white"
            >
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role} • {member.contact}</p>
              </div>
              <div className="space-x-2">
                <Button size="icon" variant="outline">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
