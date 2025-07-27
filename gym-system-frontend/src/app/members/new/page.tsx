"use client"

import LayoutShell from "@/components/shared/layout-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddMemberPage() {
  const router = useRouter()
  const [showDialog, setShowDialog] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    keyNumber: "",
    membership: "",
    price: "",
    paymentMode: "",
    paymentFrequency: "",
    joinedAt: "",
    status: "Active",
    photo: null as File | null,
  })

  const isDirty = Object.values(formData).some((val) =>
    typeof val === "string" ? val.trim() !== "" : val !== null
  )

  const handleBreadcrumbClick = (e: React.MouseEvent) => {
    if (isDirty) {
      e.preventDefault()
      setShowDialog(true)
    } else {
      router.push("/members")
    }
  }

  const discardChanges = () => {
    setShowDialog(false)
    router.push("/members")
  }

  return (
    <LayoutShell>
      {/* Confirmation Modal */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Discard Changes?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            You have unsaved changes. Are you sure you want to leave this page?
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>Cancel</Button>
            <Button onClick={discardChanges}>Leave Anyway</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mb-6 space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link href="/members" onClick={handleBreadcrumbClick} className="hover:underline">
            Members
          </Link>{" "}
          / Add New Member
        </div>
        <h1 className="text-2xl font-bold">Add New Member</h1>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Membership Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6 w-full">
            <div>
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" value="FitZone - Ayala" readOnly className="bg-gray-100 cursor-not-allowed" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="e.g. Juan Dela Cruz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="e.g. juan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" placeholder="e.g. 0917-xxxxxxx"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="keyNumber">Key Number</Label>
                <Input id="keyNumber" placeholder="Unique Key"
                  value={formData.keyNumber}
                  onChange={(e) => setFormData({ ...formData, keyNumber: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="membership">Membership Type</Label>
                <Input id="membership" placeholder="e.g. Basic, Premium"
                  value={formData.membership}
                  onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="price">Membership Price</Label>
                <Input id="price" type="number" placeholder="e.g. 1000"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="paymentMode">Mode of Payment</Label>
                <select id="paymentMode" className="w-full border rounded p-2"
                  value={formData.paymentMode}
                  onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="Cash">Cash</option>
                  <option value="Gcash">Gcash</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
              <div>
                <Label htmlFor="paymentFrequency">Frequency</Label>
                <select id="paymentFrequency" className="w-full border rounded p-2"
                  value={formData.paymentFrequency}
                  onChange={(e) => setFormData({ ...formData, paymentFrequency: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="joinedAt">Join Date</Label>
                <Input id="joinedAt" type="date"
                  value={formData.joinedAt}
                  onChange={(e) => setFormData({ ...formData, joinedAt: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <select id="status" className="w-full border rounded p-2"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="photo">Member Image</Label>
              <Input
                id="photo"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={(e) => setFormData({ ...formData, photo: e.target.files?.[0] || null })}
              />
            </div>

            <div className="text-right">
              <Button type="submit">Save Member</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </LayoutShell>
  )
}
