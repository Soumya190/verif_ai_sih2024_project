import { Search, Bell, Briefcase, Clock, User } from "lucide-react"
import Input from "../../components/ui/input"; 
import { Button } from "../../components/ui/button";

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">VerifAI</h1>
        </div>
        <nav className="mt-6">
          <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
            <Briefcase className="mr-3 h-5 w-5" />
            Jobs
          </Button>
          <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
            <Clock className="mr-3 h-5 w-5" />
            History
          </Button>
          <Button variant="ghost" className="w-full justify-start px-4 py-2 text-left">
            <User className="mr-3 h-5 w-5" />
            Profile
          </Button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Jobs</h2>
            <div className="flex items-center">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search jobs..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button variant="ghost" size="icon" className="ml-2">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 overflow-auto">
              {/* Job listings */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <Briefcase className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">JUNIOR CONSULTANT</h3>
                        <p className="text-sm text-gray-500">Applied Successfully</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">July 11, 2024 3:56 pm</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}