"use client"

import LayoutShell from "@/components/shared/layout-shell"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AddBrandPage() {
  const [brandCode, setBrandCode] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [owner, setOwner] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [businessPermit, setBusinessPermit] = useState<File | null>(null)
  const [dtiCertificate, setDtiCertificate] = useState<File | null>(null)
  const [validId, setValidId] = useState<File | null>(null)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      brandCode,
      name,
      description,
      location,
      owner,
      email,
      website,
      contactNumber,
      businessPermit,
      dtiCertificate,
      validId,
    })

    router.push("/brands")
  }

  return (
    <LayoutShell>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow px-10 py-8 space-y-8">

        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground flex items-center space-x-1">
          <Link href="/brands" className="hover:underline text-muted-foreground">
            Brands
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Add Brand</span>
        </nav>

        <h1 className="text-3xl font-bold">Register a New Brand</h1>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Brand Info */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Brand Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <Label htmlFor="brandCode">Brand Code</Label>
                <Input id="brandCode" value={brandCode} onChange={(e) => setBrandCode(e.target.value)} required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Brand Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="owner">Owner Name</Label>
                <Input id="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
              </div>
              <div className="md:col-span-2 space-y-1">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short description about the brand..."
                />
              </div>
            </div>
          </section>

          <Separator />

          {/* Contact Info */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <div className="md:col-span-2 space-y-1">
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
              </div>
            </div>
          </section>

          <Separator />

          {/* Legal Documents */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Legal Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <Label htmlFor="businessPermit">Business Permit</Label>
                <Input
                  id="businessPermit"
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={(e) => setBusinessPermit(e.target.files?.[0] || null)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="dtiCertificate">DTI Certificate</Label>
                <Input
                  id="dtiCertificate"
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={(e) => setDtiCertificate(e.target.files?.[0] || null)}
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <Label htmlFor="validId">Valid ID of Owner</Label>
                <Input
                  id="validId"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  onChange={(e) => setValidId(e.target.files?.[0] || null)}
                />
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <Button type="submit">Save Brand</Button>
            <Button type="button" variant="outline" onClick={() => router.push("/brands")}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </LayoutShell>
  )
}
