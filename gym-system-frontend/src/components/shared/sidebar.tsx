"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Home,
  Building2,
  MapPin,
  Users,
  Dumbbell,
  CalendarClock,
  CreditCard,
  BarChart3,
  ShieldCheck,
  FileText,
  Settings,
  LogOut,
} from "lucide-react"

const coreLinks = [
  { href: "/", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
  { href: "/brands", label: "Brands", icon: <Building2 className="w-4 h-4" /> },
  { href: "/branches", label: "Branches", icon: <MapPin className="w-4 h-4" /> },
  { href: "/members", label: "Members", icon: <Users className="w-4 h-4" /> },
  { href: "/trainers", label: "Trainers", icon: <Dumbbell className="w-4 h-4" /> },
  { href: "/schedules", label: "Schedules", icon: <CalendarClock className="w-4 h-4" /> },
  { href: "/payments", label: "Payments", icon: <CreditCard className="w-4 h-4" /> },
  { href: "/reports", label: "Reports", icon: <BarChart3 className="w-4 h-4" /> },
]

const adminLinks = [
  { href: "/users", label: "User Management", icon: <Users className="w-4 h-4" /> },
  { href: "/roles", label: "Roles & Permissions", icon: <ShieldCheck className="w-4 h-4" /> },
  { href: "/logs", label: "Audit Logs", icon: <FileText className="w-4 h-4" /> },
  { href: "/settings", label: "System Settings", icon: <Settings className="w-4 h-4" /> },
]

export default function Sidebar() {
  const pathname = usePathname()

  const renderLinks = (links: typeof coreLinks) =>
    links.map((link) => {
      const isActive = pathname === link.href
      return (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            isActive
              ? "bg-gray-200 text-gray-900"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          )}
        >
          {link.icon}
          {link.label}
        </Link>
      )
    })

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col px-3 py-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold px-2">Gym Manager</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">Core Modules</h4>
          <nav className="space-y-1">{renderLinks(coreLinks)}</nav>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">Admin Tools</h4>
          <nav className="space-y-1">{renderLinks(adminLinks)}</nav>
        </div>
      </div>

      <div className="mt-auto px-2">
        <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  )
}
