"use client"

import LayoutShell from "@/components/shared/layout-shell"
import MemberTable from "@/components/members/MemberTable"
import { initialMembers } from "@/lib/data/mockData"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MembersPage() {
  return (
    <LayoutShell>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Branch Members</h1>
          <p className="text-sm text-muted-foreground">Manage and view members under this branch</p>
        </div>
        <Link href="/members/new">
          <Button>Add New Member</Button>
        </Link>
      </div>
      <MemberTable members={initialMembers} />
    </LayoutShell>
  )
}
