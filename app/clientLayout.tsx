"use client"

import type React from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Activity, Camera, CombineIcon as Conveyor, BarChart3, AlertTriangle, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./globals.css"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Process Flow",
    url: "/process-flow",
    icon: Activity,
  },
  {
    title: "Camera & Vision",
    url: "/camera",
    icon: Camera,
  },
  {
    title: "Conveyors",
    url: "/conveyors",
    icon: Conveyor,
  },
  {
    title: "Statistics",
    url: "/statistics",
    icon: BarChart3,
  },
  {
    title: "Errors & Alerts",
    url: "/errors",
    icon: AlertTriangle,
  },
  {
    title: "User & Roles",
    url: "/login",
    icon: User,
  },
]

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <div>
              <div className="font-semibold">KUKA HMI</div>
              <div className="text-xs text-muted-foreground">Cube Sorting System</div>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={pathname === item.url}>
                  <Link href={item.url}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="ml-auto flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              System Status: <span className="text-green-600 font-medium">Online</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
