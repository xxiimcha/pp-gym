"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { type JSX } from "react"

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
  ChevronDown,
  ChevronRight,
} from "lucide-react"

const userRole = "admin"

const userPermissions = {
  canViewDashboard: true,
  canManageBrands: true,
  canManageBranches: true,
  canManageMembers: true,
  canManageTrainers: true,
  canManageSchedules: true,
  canManagePayments: true,
  canViewReports: true,
  canAccessAdminTools: userRole === "admin",
}

const dashboardLink = {
  href: "/",
  label: "Dashboard",
  icon: <Home className="w-4 h-4" />,
  permissionKey: "canViewDashboard",
}

const managementGroup = {
  label: "Management",
  icon: <Users className="w-4 h-4" />,
  items: [
    { href: "/brands", label: "Brands", icon: <Building2 className="w-4 h-4" />, permissionKey: "canManageBrands" },
    { href: "/branches", label: "Branches", icon: <MapPin className="w-4 h-4" />, permissionKey: "canManageBranches" },
    { href: "/members", label: "Members", icon: <Users className="w-4 h-4" />, permissionKey: "canManageMembers" },
    { href: "/trainers", label: "Trainers", icon: <Dumbbell className="w-4 h-4" />, permissionKey: "canManageTrainers" },
  ],
}

const opsGroup = {
  label: "Operations",
  icon: <CalendarClock className="w-4 h-4" />,
  items: [
    { href: "/schedules", label: "Schedules", icon: <CalendarClock className="w-4 h-4" />, permissionKey: "canManageSchedules" },
    { href: "/payments", label: "Payments", icon: <CreditCard className="w-4 h-4" />, permissionKey: "canManagePayments" },
    { href: "/reports", label: "Reports", icon: <BarChart3 className="w-4 h-4" />, permissionKey: "canViewReports" },
  ],
}

const adminLinks = [
  { href: "/users", label: "User Management", icon: <Users className="w-4 h-4" />, permissionKey: "canAccessAdminTools" },
  { href: "/roles", label: "Roles & Permissions", icon: <ShieldCheck className="w-4 h-4" />, permissionKey: "canAccessAdminTools" },
  { href: "/logs", label: "Audit Logs", icon: <FileText className="w-4 h-4" />, permissionKey: "canAccessAdminTools" },
  { href: "/settings", label: "System Settings", icon: <Settings className="w-4 h-4" />, permissionKey: "canAccessAdminTools" },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({
    Management: true,
    Operations: true,
  })

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }))
  }

  const renderNavItem = (
    item: {
      href: string
      label: string
      icon?: JSX.Element
      permissionKey?: keyof typeof userPermissions
    },
    isChild = false
  ) => {
    if (item.permissionKey && !userPermissions[item.permissionKey]) return null

    const isActive = pathname === item.href
    return (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors",
          isActive
            ? "bg-gray-200 text-gray-900 font-medium"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
          isChild && "pl-8"
        )}
      >
        {item.icon}
        {item.label}
      </Link>
    )
  }

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col px-3 py-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold px-2">Gym Manager</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {renderNavItem(dashboardLink)}

        {/* Group: Management */}
        <div>
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            onClick={() => toggleGroup(managementGroup.label)}
          >
            <span className="flex items-center gap-2">
              {managementGroup.icon}
              {managementGroup.label}
            </span>
            {openGroups[managementGroup.label] ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {openGroups[managementGroup.label] && (
            <div className="space-y-1 mt-1">
              {managementGroup.items.map((item) => renderNavItem(item, true))}
            </div>
          )}
        </div>

        {/* Group: Operations */}
        <div>
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            onClick={() => toggleGroup(opsGroup.label)}
          >
            <span className="flex items-center gap-2">
              {opsGroup.icon}
              {opsGroup.label}
            </span>
            {openGroups[opsGroup.label] ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {openGroups[opsGroup.label] && (
            <div className="space-y-1 mt-1">
              {opsGroup.items.map((item) => renderNavItem(item, true))}
            </div>
          )}
        </div>

        {/* Admin Tools */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2 mt-4">Admin Tools</h4>
          <nav className="space-y-1">
            {adminLinks.map((item) => renderNavItem(item))}
          </nav>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-auto px-2">
        <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  )
}
