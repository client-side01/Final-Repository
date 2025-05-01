import React from "react";

// Green arrow icon component
const GreenArrowIcon = () => (
  <svg
    className="w-4 h-4 text-green-600 mt-1 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ServiceOffer = () => {
  const services = [
    {
      title: "Recruitment NON-IT and IT",
      image: "/src/assets/IT AND NON IT .webp",
      points: [
        "Comprehensive end-to-end recruitment solutions.",
        "Technically proficient sourcing specialists.",
        "Extensive candidate database across industries.",
        "Nationwide network for faster hiring turnaround.",
      ],
    },
    {
      title: "Executive Search and Head-Hunting",
      image: "/src/assets/Executive1.jpg",
      points: [
        "Specialized in CXO and Board-level hiring.",
        "In-depth industry and domain expertise.",
        "Access to broad and deep professional networks.",
        "Focused on finding the most qualified candidates.",
      ],
    },
    {
      title: "Volume / Bulk Hiring",
      image: "/src/assets/Volume-Bulk-Hiring-3.jpg",
      points: [
        "Ideal for start-ups, expansions, and new projects.",
        "High-volume hiring within project timelines.",
        "Fast sourcing turnaround.",
        "PAN India network for efficient execution.",
      ],
    },
    {
      title: "Temporary / Contract Staffing",
      image: "/src/assets/Temporary-Contract-Staffing-4.jpg",
      points: [
        "Immediate deployment of skilled professionals.",
        "Continuously available candidate pipeline.",
        "End-to-end onboarding across regions.",
        "Cost-effective and experience-driven pricing.",
      ],
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      image: "/src/assets/Recruitment-Process.jpg",
      points: [
        "End-to-end recruitment as an extension of your team.",
        "Customizable onsite/offsite hiring models.",
        "Scalable hiring processes to meet tight deadlines.",
        "Optimized HR workflows and compliance.",
      ],
    },
    {
      title: "Payroll Management",
      image: "/src/assets/Payroll-Management.jpg",
      points: [
        "Full-service payroll processing.",
        "100% statutory compliance.",
        "Audit-ready contractor documentation.",
        "Assistance with labor law registrations & renewals.",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] sm:min-h-[750px] flex items-center justify-start overflow-hidden text-white">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/SErvices0.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-left px-4 sm:px-6 md:px-10 max-w-2xl pt-20 sm:pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug sm:leading-tight tracking-tight">
            Services We Offer
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed sm:leading-loose">
            We provide customized Recruitment and Payroll solutions to fit your
            business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading with left alignment */}
          <div className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Services We Offer
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
              We approach client relationships as true collaborations, aiming to
              create strong teams that fuel sustained business growth. By
              gaining a deep understanding of your specific requirements—such as
              cultural compatibility and interpersonal skills—we quickly provide
              the ideal candidates, with precision and efficiency.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Image Section with conditional style */}
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full transition-transform duration-500 ease-in-out ${
                      service.title === "Executive Search and Head-Hunting"
                        ? "object-contain"
                        : "object-cover"
                    } hover:scale-110`}
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm flex-grow">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <GreenArrowIcon />
                        <span className="ml-2">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceOffer;