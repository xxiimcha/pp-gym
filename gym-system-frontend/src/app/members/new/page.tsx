"use client"

import LayoutShell from "@/components/shared/layout-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AddMemberPage() {
  return (
    <LayoutShell>
      <div className="mb-6 space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link href="/members" className="hover:underline">Members</Link> / Add New Member
        </div>
        <h1 className="text-2xl font-bold">Add New Member</h1>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Membership Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6 w-full">
            {/* Branch */}
            <div>
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" value="FitZone - Ayala" readOnly className="bg-gray-100 cursor-not-allowed" />
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="e.g. Juan Dela Cruz" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="e.g. juan@example.com" />
              </div>
              <div>
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" placeholder="e.g. 0917-xxxxxxx" />
              </div>
              <div>
                <Label htmlFor="keyNumber">Key Number</Label>
                <Input id="keyNumber" placeholder="Unique Key" />
              </div>
            </div>

            {/* Membership Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="membership">Membership Type</Label>
                <Input id="membership" placeholder="e.g. Basic, Premium" />
              </div>
              <div>
                <Label htmlFor="price">Membership Price</Label>
                <Input id="price" type="number" placeholder="e.g. 1000" />
              </div>
              <div>
                <Label htmlFor="paymentMode">Mode of Payment</Label>
                <select id="paymentMode" className="w-full border rounded p-2">
                  <option value="">Select</option>
                  <option value="Cash">Cash</option>
                  <option value="Gcash">Gcash</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
              <div>
                <Label htmlFor="paymentFrequency">Frequency</Label>
                <select id="paymentFrequency" className="w-full border rounded p-2">
                  <option value="">Select</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>

            {/* Join Date & Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="joinedAt">Join Date</Label>
                <Input id="joinedAt" type="date" />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <select id="status" className="w-full border rounded p-2">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Member Image (Camera Only) */}
            <div>
              <Label htmlFor="photo">Member Image</Label>
              <Input
                id="photo"
                type="file"
                accept="image/*"
                capture="environment" // Enforces use of camera on mobile
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
