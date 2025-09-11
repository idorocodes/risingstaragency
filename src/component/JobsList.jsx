import { useEffect, useState } from "react"
import { client } from "../sanityClient"
import { Dialog } from "@headlessui/react"
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon
} from "@heroicons/react/24/outline"

const iconsMap = {
  Frontend: CloudArrowUpIcon,
  Backend: ArrowPathIcon,
  Product: FingerPrintIcon,
  Security: LockClosedIcon,
}


export default function JobsList() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [applicantName, setApplicantName] = useState("")

  useEffect(() => {
    async function fetchJobs() {
      const query = `*[_type == "job"]{
        _id,
        title,
        salary,
        location,
        requirement,
        description,
        category,
      }`
      const data = await client.fetch(query)
      setJobs(data)
      setLoading(false)
    }
    fetchJobs()
  }, [])

  const filteredJobs = jobs
   
    .filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div id="findjobs" className="py-10 lg:mt-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-7">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-4xl font-body font-semibold tracking-tight text-[#02101b] sm:text-5xl">
            Available Jobs
          </p>
          <p className="mt-4 text-sm text-[#001b30b2] leading-relaxed">
            Passionate and curious minds are needed. Explore job offers below.
          </p>

         

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-xl text-sm outline-0 border-[#008eca]"
            />
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="mx-auto mt-10 max-w-xl lg:max-w-5xl">
          {loading ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-28 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => {
                const Icon = iconsMap[job.category] || CloudArrowUpIcon
                return (
                  <div
                    key={job._id}
                    className="relative rounded-xl bg-[#02101b] p-5 shadow-sm hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    <dt className="flex items-center gap-x-3 text-lg font-semibold text-[#f0f5ff]">
                      <Icon className="h-6 w-6 text-[#008eca]" />
                      {job.title}
                    </dt>
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-[#008eca]/20 text-[#008eca] rounded-full">
                      {job.category}
                    </span>
                    <dd className="mt-2 text-sm text-[#f0f5ff] line-clamp-3">
                      {job.description}
                    </dd>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => {
                          setSelectedJob(job)
                          setModalOpen(true)
                        }}
                        className="px-3 py-1.5 text-xs rounded-full cursor-pointer bg-[#008eca] text-white hover:bg-[#025a80]"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )
              })}
            </dl>
          )}
        </div>
      </div>

      {/* Apply Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0  flex items-center justify-center p-4">
          
          <Dialog.Panel className="mx-auto max-w-md rounded bg-white p-6 shadow-lg">
            
                <XMarkIcon onClick={()=> setModalOpen(false)} className="w-5 float-right cursor-pointer"/>
            
        
            <Dialog.Title className="text-lg font-semibold">
              Apply for {selectedJob?.title}
            </Dialog.Title>
            <p className="mt-2 text-xm text-gray-600">
              Job Location: <span className="font-medium">{selectedJob?.location}</span>
            </p>
            <p className="mt-1 text-xm text-gray-600">
              Salary: <span className="font-medium">{selectedJob?.salary}</span>
            </p>
            <p className="mt-2 text-xm text-gray-600">
              Requirements:  <span className="font-medium">{selectedJob?.requirement} </span>  </p>
            <p className="mt-3 text-xm text-gray-600">Description: {selectedJob?.description} </p>

            {/* Input field */}
            <input
              type="text"
              placeholder="Enter your name"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              className="w-full mt-5 rounded-xl border border-[#008eca] px-3 py-2 text-sm"
            />

            {/* Contact options */}
            <div className="mt-2 text-sm">
            
             <button> <a
                href={`https://api.whatsapp.com/send?phone=2347085428196&text=Hello, my name is ${encodeURIComponent(
                  applicantName
                )}, and I’d like to apply for ${selectedJob?.title}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-2 no-underline mt-3  bg-[#008eca] rounded-2xl block "
              >
                Send Application
              </a>
              </button> 
            </div>

            {/* Close button */}
            
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
