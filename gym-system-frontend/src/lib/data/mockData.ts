import { Brand } from "../types"

export const initialBrands: Brand[] = [
  {
    id: 1,
    name: "FitZone",
    branches: [
      {
        id: 101,
        name: "FitZone - Ayala",
        address: "Ayala Ave, Makati",
        contact: "0917-123-4567",
        status: "Active",
        staff: [
          {
            id: 1,
            name: "Anna Santos",
            role: "Branch Manager",
            email: "anna@fitzone.com",
            contact: "0917-333-8888",
          },
          {
            id: 2,
            name: "Leo Cruz",
            role: "Trainer",
            email: "leo@fitzone.com",
            contact: "0917-444-9999",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "MusclePro",
    branches: [
      {
        id: 201,
        name: "MusclePro - QC",
        address: "Quezon Ave, QC",
        contact: "0922-333-1234",
        status: "Inactive",
        staff: [],
      },
    ],
  },
]

export const initialMembers = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    contact: "09171234567",
    status: "Active",              // ✅ required
    membershipType: "Premium",     // ✅ required
    joinedAt: "2024-01-10",        // ✅ required
    branchId: 101,                 // ✅ required
  },
  {
    id: 2,
    name: "Mark Cruz",
    email: "mark@example.com",
    contact: "09181234567",
    status: "Inactive",
    membershipType: "Basic",
    joinedAt: "2024-03-15",
    branchId: 101,
  }
]
