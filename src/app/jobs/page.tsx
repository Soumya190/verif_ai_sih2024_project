import Image from 'next/image'
import { Bell, Search, Briefcase, Clock, User } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  const jobs = [
    {
      title: 'JUNIOR CONSULTANT',
      organization: 'DRDO',
      lastDate: '10 September 2024',
    },
    {
      title: 'RESEARCH ASSC.',
      organization: 'DRDO',
      lastDate: '20 September 2024',
    },
    {
      title: 'PROJECT HEAD',
      organization: 'DRDO',
      lastDate: '10 October 2024',
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <Image src="/placeholder.svg" alt="VerifAI Logo" width={100} height={40} className="h-8 w-auto" />
        <div className="flex space-x-4">
          <Search className="w-6 h-6 text-gray-500" />
          <Bell className="w-6 h-6 text-gray-500" />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-blue-600 text-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-sm">Organization : {job.organization}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm">Last Date : {job.lastDate}</p>
              <button className="bg-pink-400 text-white px-4 py-1 rounded-full text-sm">
                Apply
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-white border-t border-gray-200">
        <nav className="flex justify-around py-2">
          <button className="flex flex-col items-center text-blue-600">
            <Briefcase className="w-6 h-6" />
            <span className="text-xs">Jobs</span>
          </button>
          <Link href="/history">
          <button className="flex flex-col items-center text-gray-500">
            <Clock className="w-6 h-6" />
            <span className="text-xs">History</span>
          </button>
          </Link>
          <Link href="/profile">
          <button className="flex flex-col items-center text-gray-500">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
          </Link>
        </nav>
      </footer>
    </div>
  )
}