"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Plus } from "lucide-react"

interface AddBranchModalProps {
  brands: any[]
  setBrands: (brands: any[]) => void
}

export default function AddBranchModal({ brands, setBrands }: AddBranchModalProps) {
  const [newBranchName, setNewBranchName] = useState("")
  const [newBranchAddress, setNewBranchAddress] = useState("")
  const [newBranchContact, setNewBranchContact] = useState("")
  const [newBranchEmail, setNewBranchEmail] = useState("")
  const [newBranchHours, setNewBranchHours] = useState("")
  const [newBranchManager, setNewBranchManager] = useState("")
  const [newBranchStatus, setNewBranchStatus] = useState<"Active" | "Inactive">("Active")
  const [newBranchNotes, setNewBranchNotes] = useState("")
  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null)

  const handleAddBranch = () => {
    if (!newBranchName || !newBranchAddress || !newBranchContact || selectedBrandId === null) return

    const newBranch = {
      id: Date.now(),
      name: newBranchName,
      address: newBranchAddress,
      contact: newBranchContact,
      email: newBranchEmail,
      hours: newBranchHours,
      manager: newBranchManager,
      notes: newBranchNotes,
      status: newBranchStatus,
      staff: [],
    }

    const updatedBrands = brands.map((brand) => {
      if (brand.id === selectedBrandId) {
        return { ...brand, branches: [...brand.branches, newBranch] }
      }
      return brand
    })

    setBrands(updatedBrands)
    setNewBranchName("")
    setNewBranchAddress("")
    setNewBranchContact("")
    setNewBranchEmail("")
    setNewBranchHours("")
    setNewBranchManager("")
    setNewBranchStatus("Active")
    setNewBranchNotes("")
    setSelectedBrandId(null)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="w-4 h-4 mr-1" /> Add Branch
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Branch</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <select
              id="brand"
              className="w-full border rounded p-2"
              value={selectedBrandId ?? ""}
              onChange={(e) => setSelectedBrandId(Number(e.target.value))}
            >
              <option value="" disabled>Select Brand</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Branch Name</Label>
            <Input id="name" value={newBranchName} onChange={(e) => setNewBranchName(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" value={newBranchAddress} onChange={(e) => setNewBranchAddress(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact</Label>
            <Input id="contact" value={newBranchContact} onChange={(e) => setNewBranchContact(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={newBranchEmail} onChange={(e) => setNewBranchEmail(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Opening Hours</Label>
            <Input id="hours" placeholder="e.g. 7AM - 10PM" value={newBranchHours} onChange={(e) => setNewBranchHours(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="manager">Branch Manager</Label>
            <Input id="manager" value={newBranchManager} onChange={(e) => setNewBranchManager(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              className="w-full border rounded p-2"
              value={newBranchStatus}
              onChange={(e) => setNewBranchStatus(e.target.value as "Active" | "Inactive")}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes / Remarks</Label>
            <Textarea id="notes" value={newBranchNotes} onChange={(e) => setNewBranchNotes(e.target.value)} />
          </div>

          <div className="text-right">
            <Button onClick={handleAddBranch}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
