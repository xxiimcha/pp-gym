import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

type Member = {
  id: number
  name: string
  email: string
  contact: string
  status: "Active" | "Inactive"
}

export default function MemberTable({ members }: { members: Member[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {["ID", "Name", "Email", "Contact", "Status", "Actions"].map((head) => (
              <th key={head} className="px-4 py-3 text-left">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{m.id}</td>
              <td className="px-4 py-2 font-medium">{m.name}</td>
              <td className="px-4 py-2">{m.email}</td>
              <td className="px-4 py-2">{m.contact}</td>
              <td className="px-4 py-2">
                <Badge variant={m.status === "Active" ? "default" : "secondary"}>
                  {m.status}
                </Badge>
              </td>
              <td className="px-4 py-2 space-x-2">
                <Button size="sm" variant="outline"><Pencil className="w-4 h-4" /></Button>
                <Button size="sm" variant="destructive"><Trash2 className="w-4 h-4" /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
