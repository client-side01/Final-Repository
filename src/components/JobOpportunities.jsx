import React from 'react'

const JobOpportunities = () => {
    const jobs = [
        {
          title: "Vice President - Investment Banker",
          department: "Customer Support",
          location: "Bangalore",
        },
        {
          title: "Senior Manager – Finance",
          department: "",
          location: "",
        },
        {
          title: "Full Stack Developer",
          department: "",
          location: "",
        },
        {
          title: "Oracle Integration Cloud (OIC)",
          department: "",
          location: "",
        },
        {
          title: "Area Sales Manager",
          department: "",
          location: "",
        },
      ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold mb-8">Job opportunities</h2>
    
    {/* Filters */}
    <div className="flex flex-wrap gap-4 mb-8">
      <select className="bg-white border border-gray-300 rounded-md px-4 py-2">
        <option>All Job Category</option>
        <option>Finance</option>
        <option>Technology</option>
        <option>Sales</option>
        <option>Customer Support</option>
      </select>
      
      <select className="bg-white border border-gray-300 rounded-md px-4 py-2">
        <option>All Job Type</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
      </select>
      
      <select className="bg-white border border-gray-300 rounded-md px-4 py-2">
        <option>All Job Location</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Remote</option>
      </select>
    </div>
    
    {/* Job Listings */}
    <div className="space-y-6">
      {jobs.map((job, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          {(job.department || job.location) && (
            <p className="text-gray-600 mb-4">
              {job.department && <span>{job.department}</span>}
              {job.department && job.location && <span> • </span>}
              {job.location && <span>{job.location}</span>}
            </p>
          )}
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            More Details →
          </a>
        </div>
      ))}
    </div>
    
    {/* Explore All Button */}
    <div className="mt-10 text-center">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors cursor-pointer">
        Explore All
      </button>
    </div>
  </div>
  )
}

export default JobOpportunities