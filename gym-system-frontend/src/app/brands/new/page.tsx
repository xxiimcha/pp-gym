"use client"

import LayoutShell from "@/components/shared/layout-shell"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddBrandPage() {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [businessPermit, setBusinessPermit] = useState<File | null>(null)
  const [dtiCertificate, setDtiCertificate] = useState<File | null>(null)
  const [validId, setValidId] = useState<File | null>(null)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Log preview — for now
    console.log({
      name,
      location,
      email,
      contactNumber,
      businessPermit,
      dtiCertificate,
      validId,
    })

    // You can handle actual file upload via FormData + API later

    // Reset
    setName("")
    setLocation("")
    setEmail("")
    setContactNumber("")
    setBusinessPermit(null)
    setDtiCertificate(null)
    setValidId(null)

    router.push("/brands")
  }

  return (
    <LayoutShell>
      <h1 className="text-2xl font-bold mb-6">Add New Brand</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl bg-white p-6 rounded shadow">
        <div>
          <Label htmlFor="name">Brand Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="contact">Contact Number</Label>
          <Input id="contact" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </div>

        <div>
          <Label htmlFor="businessPermit">Business Permit</Label>
          <Input
            id="businessPermit"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => setBusinessPermit(e.target.files?.[0] || null)}
          />
        </div>

        <div>
          <Label htmlFor="dtiCertificate">DTI Certificate</Label>
          <Input
            id="dtiCertificate"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => setDtiCertificate(e.target.files?.[0] || null)}
          />
        </div>

        <div>
          <Label htmlFor="validId">Valid ID of Owner</Label>
          <Input
            id="validId"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => setValidId(e.target.files?.[0] || null)}
          />
        </div>

        <div className="flex gap-3 mt-6">
          <Button type="submit">Save Brand</Button>
          <Button type="button" variant="outline" onClick={() => router.push("/brands")}>Cancel</Button>
        </div>
      </form>
    </LayoutShell>
  )
}
