export interface Staff {
  id: number
  name: string
  role: string
  email: string
  contact: string
}

export interface Branch {
  id: number
  name: string
  address: string
  contact: string
  status: "Active" | "Inactive"
  staff: Staff[]
}

export interface Brand {
  id: number
  name: string
  branches: Branch[]
}

export interface Member {
  id: number
  name: string
  email: string
  contact: string
  status: "Active" | "Inactive" 
  membershipType: string
  joinedAt: string
  branchId: number
}
