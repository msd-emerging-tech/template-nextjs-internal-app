import Link from 'next/link'

export default function Home() {
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
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Your Internal Tool
            </h2>
            <p className="text-gray-600 mb-6">
              This template provides a foundation for building internal tools and dashboards
              with Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ready to Deploy
                </h3>
                <p className="text-gray-600 text-sm">
                  Docker-ready with health checks and production optimizations
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Modern Stack
                </h3>
                <p className="text-gray-600 text-sm">
                  Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
                  → View Dashboard
                </Link>
              </li>
              <li>
                <a href="/health" className="text-blue-600 hover:text-blue-800">
                  → Health Check
                </a>
              </li>
              <li>
                <a href="/api/health" className="text-blue-600 hover:text-blue-800">
                  → API Health
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
