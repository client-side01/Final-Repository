import React from 'react'

const JobOpportunities01 = () => {
  return (
    <div
      className="min-h-screen mb-4  flex items-center w-full overflow-hidden bg-cover "
      style={{ backgroundImage: "url('/banner02.png')" }}
      id="Header"
    >
      <div className="container text-left mx-auto py-4 px-6 md:px-20 lg:px-32  ">
        <h2 className="text-2xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">
         Job Opportunities
        </h2>
        <p className="max-w-2xl mt-4 font-semibold">
        Explore thrilling employment prospects with top organizations, aligning with your abilities and professional goals.
        </p>
        <div className="space-x-6 mt-16">
          {/* <a href="#Projects" className="border border-white px-8 py-3">Projects</a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3">Contact Us</a> */}
        </div>
      </div>
    </div>
  )
}

export default JobOpportunities01