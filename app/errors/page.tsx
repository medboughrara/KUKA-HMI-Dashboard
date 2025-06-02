"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle, CheckCircle, XCircle, Clock, Search, RefreshCw } from "lucide-react"

interface ErrorLog {
  id: string
  timestamp: string
  severity: "Critical" | "Warning" | "Info"
  component: string
  code: string
  description: string
  status: "Active" | "Acknowledged" | "Resolved"
  instructions?: string
}

export default function ErrorsAlerts() {
  const [errors, setErrors] = useState<ErrorLog[]>([
    {
      id: "E001",
      timestamp: "2024-01-15 14:23:15",
      severity: "Critical",
      component: "KUKA Robot",
      code: "ROB_001",
      description: "Robot arm position sensor malfunction",
      status: "Active",
      instructions: "Check sensor connections and recalibrate robot arm",
    },
    {
      id: "E002",
      timestamp: "2024-01-15 13:45:22",
      severity: "Warning",
      component: "Conveyor 1",
      code: "CNV_003",
      description: "Motor temperature above normal range",
      status: "Acknowledged",
      instructions: "Monitor temperature and reduce speed if necessary",
    },
    {
      id: "E003",
      timestamp: "2024-01-15 12:18:45",
      severity: "Info",
      component: "Camera System",
      code: "CAM_002",
      description: "Lighting conditions suboptimal",
      status: "Resolved",
      instructions: "Adjust lighting or camera exposure settings",
    },
    {
      id: "E004",
      timestamp: "2024-01-15 11:32:10",
      severity: "Warning",
      component: "Conveyor 2",
      code: "CNV_001",
      description: "Cube jam detected in sorting area",
      status: "Resolved",
      instructions: "Clear obstruction and restart conveyor",
    },
    {
      id: "E005",
      timestamp: "2024-01-15 10:15:33",
      severity: "Critical",
      component: "Vision System",
      code: "VIS_004",
      description: "Classification accuracy below threshold",
      status: "Acknowledged",
      instructions: "Recalibrate vision parameters and check lighting",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterSeverity, setFilterSeverity] = useState<string>("All")
  const [filterStatus, setFilterStatus] = useState<string>("All")

  // Simulate new errors
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        const newError: ErrorLog = {
          id: `E${String(Date.now()).slice(-3)}`,
          timestamp: new Date().toLocaleString(),
          severity: Math.random() < 0.3 ? "Critical" : Math.random() < 0.6 ? "Warning" : "Info",
          component: ["KUKA Robot", "Conveyor 1", "Conveyor 2", "Camera System", "Vision System"][
            Math.floor(Math.random() * 5)
          ],
          code: `SYS_${Math.floor(Math.random() * 999)
            .toString()
            .padStart(3, "0")}`,
          description: [
            "Unexpected system behavior detected",
            "Communication timeout",
            "Sensor reading out of range",
            "Performance degradation detected",
          ][Math.floor(Math.random() * 4)],
          status: "Active",
          instructions: "Investigate and take appropriate action",
        }
        setErrors((prev) => [newError, ...prev])
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const acknowledgeError = (id: string) => {
    setErrors((prev) => prev.map((error) => (error.id === id ? { ...error, status: "Acknowledged" } : error)))
  }

  const resolveError = (id: string) => {
    setErrors((prev) => prev.map((error) => (error.id === id ? { ...error, status: "Resolved" } : error)))
  }

  const clearResolvedErrors = () => {
    setErrors((prev) => prev.filter((error) => error.status !== "Resolved"))
  }

  const filteredErrors = errors.filter((error) => {
    const matchesSearch =
      error.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSeverity = filterSeverity === "All" || error.severity === filterSeverity
    const matchesStatus = filterStatus === "All" || error.status === filterStatus

    return matchesSearch && matchesSeverity && matchesStatus
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "destructive"
      case "Warning":
        return "default"
      case "Info":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "Critical":
        return <XCircle className="w-4 h-4" />
      case "Warning":
        return <AlertTriangle className="w-4 h-4" />
      case "Info":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "Acknowledged":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "Resolved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const activeErrors = errors.filter((e) => e.status === "Active").length
  const acknowledgedErrors = errors.filter((e) => e.status === "Acknowledged").length
  const criticalErrors = errors.filter((e) => e.severity === "Critical" && e.status === "Active").length

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Error & Alert Management</h1>
        <div className="flex gap-2">
          <Button onClick={clearResolvedErrors} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Clear Resolved
          </Button>
        </div>
      </div>

      {/* Critical Alerts */}
      {criticalErrors > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {criticalErrors} critical error{criticalErrors > 1 ? "s" : ""} require immediate attention!
          </AlertDescription>
        </Alert>
      )}

      {/* Error Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Errors</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{activeErrors}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acknowledged</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">{acknowledgedErrors}</div>
            <p className="text-xs text-muted-foreground">Being addressed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Errors</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{criticalErrors}</div>
            <p className="text-xs text-muted-foreground">High priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Errors</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{errors.length}</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search errors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="severity">Severity</Label>
              <select
                id="severity"
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="All">All Severities</option>
                <option value="Critical">Critical</option>
                <option value="Warning">Warning</option>
                <option value="Info">Info</option>
              </select>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Acknowledged">Acknowledged</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setFilterSeverity("All")
                  setFilterStatus("All")
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error List */}
      <Card>
        <CardHeader>
          <CardTitle>Error Log ({filteredErrors.length} entries)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredErrors.map((error) => (
              <div key={error.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getSeverityIcon(error.severity)}
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getSeverityColor(error.severity) as any}>{error.severity}</Badge>
                        <Badge variant="outline">{error.code}</Badge>
                        <span className="text-sm font-medium">{error.component}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{error.timestamp}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(error.status)}
                    <Badge
                      variant={
                        error.status === "Active"
                          ? "destructive"
                          : error.status === "Acknowledged"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {error.status}
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="font-medium">{error.description}</p>
                  {error.instructions && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Instructions:</strong> {error.instructions}
                    </p>
                  )}
                </div>

                {error.status === "Active" && (
                  <div className="flex gap-2">
                    <Button onClick={() => acknowledgeError(error.id)} variant="outline" size="sm">
                      Acknowledge
                    </Button>
                    <Button onClick={() => resolveError(error.id)} variant="default" size="sm">
                      Mark Resolved
                    </Button>
                  </div>
                )}

                {error.status === "Acknowledged" && (
                  <div className="flex gap-2">
                    <Button onClick={() => resolveError(error.id)} variant="default" size="sm">
                      Mark Resolved
                    </Button>
                  </div>
                )}
              </div>
            ))}

            {filteredErrors.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No errors found matching the current filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
