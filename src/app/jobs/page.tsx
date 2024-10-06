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
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#015DE7] to-[#061388]">
      <header className=" p-4 flex justify-between items-center">
        <div className='flex '>
        <Image src="/images/Verif@3x.svg" alt="VerifAI Logo" width={80} height={30} className="h-10 w-auto" />
        <Image src="/images/img1.svg" alt="VerifAI Logo" width={100} height={40} className="h-16 mt-[-0.5rem]  ml-[-6.3rem] w-auto"/>
        </div>
        <div className="flex space-x-4">
          <div className='bg-gray-200 rounded-full w-[20rem] h-[2rem] grid'>
          <Search className="w-6 h-6 text-gray-500  ml-[17.5rem] mt-1" />
          </div>
          <Bell className="w-6 h-6 text-gray-500" />
        </div>
      </header>

      <div className="grid place-content-center h-screen gap-5 p-4 space-y-4 ">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white text-blue-600 rounded-xl w-[50rem] p-4 shadow-md">
            <div className='flex justify-between'>
            <div className='grid '>
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-sm">Organization : {job.organization}</p>
            </div>
            <Image src="/images/Rectangle 1437@3x.svg" alt="VerifAI Logo" width={80} height={30} className="h-16 w-auto"/>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className='bg-gradient-to-l from-[#035BE4] to-[#02327E] h-6'>
              <p className="text-sm text-white">Last Date : {job.lastDate}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className=" grid grid-col place-content-center">
        <div className="flex justify-center items-center gap-[3rem] py-2 bg-white w-[20rem] rounded-full">
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
        </div>
      </footer>
    </div>
  )
}