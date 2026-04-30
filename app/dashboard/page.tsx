'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Metric {
  label: string
  value: string
  change: string
  positive: boolean
}

export default function Dashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, fetch from API
    setMetrics([
      { label: 'Total Users', value: '2,543', change: '+12%', positive: true },
      { label: 'Active Sessions', value: '142', change: '+5%', positive: true },
      { label: 'Error Rate', value: '0.3%', change: '-2%', positive: true },
      { label: 'Response Time', value: '45ms', change: '+3ms', positive: false },
    ])
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen">
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Internal Tool</h1>
            <div className="flex gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-900 font-medium">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>

          {loading ? (
            <div className="text-gray-600">Loading metrics...</div>
          ) : (
            <>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-2">
                      {metric.value}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        metric.positive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {metric.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {[
                      { action: 'User login', time: '2 minutes ago' },
                      { action: 'Data export', time: '15 minutes ago' },
                      { action: 'Report generated', time: '1 hour ago' },
                      { action: 'Settings updated', time: '3 hours ago' },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-900">{activity.action}</span>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    System Status
                  </h3>
                  <div className="space-y-3">
                    {[
                      { service: 'API', status: 'Operational', up: true },
                      { service: 'Database', status: 'Operational', up: true },
                      { service: 'Cache', status: 'Operational', up: true },
                      { service: 'Queue', status: 'Operational', up: true },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-900">{service.service}</span>
                        <span
                          className={`text-sm font-medium ${
                            service.up ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {service.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
