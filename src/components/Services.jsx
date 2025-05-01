import React, { useState } from "react";

const services = [
  {
    title: "Recruitment NON-IT and IT",
    image: "/src/assets/IT AND NON IT .webp",
    icon: "🧑‍💼",
  },
  {
    title: "Executive Search and Head-Hunting",
    image: "/src/assets/Executive1.jpg",
    icon: "🎯",
  },
  {
    title: "Volume / Bulk Hiring",
    image: "/src/assets/Volume-Bulk-Hiring-3.jpg",
    icon: "👥",
  },
  {
    title: "Temporary / Contract Staffing",
    image: "/src/assets/Temporary-Contract-Staffing-4.jpg",
    icon: "🤝",
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    image: "/src/assets/Recruitment-Process.jpg",
    icon: "🧠",
  },
  {
    title: "Payroll Management",
    image: "/src/assets/Payroll-Management.jpg",
    icon: "💵",
  },
];

const Services = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  // const handleClick = (index) => {
  //   setClickedIndex(index);  Set clicked service index
  //   alert(`Service Clicked: ${services[index].title}`); Display alert for clicked service (or add your custom behavior here)
  // };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white -mt-18">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Services We Offer
        </h2>
        <p className="text-base text-left sm:text-lg text-gray-800 mb-12 max-w-3xl mx-auto text-center">
          We approach client relationships as true collaborations, aiming to
          create strong teams that fuel sustained business growth. By gaining a
          deep understanding of your specific requirements—such as cultural
          compatibility and interpersonal skills—we quickly provide the ideal
          candidates, with precision and efficiency.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)} // Handle the click event
              className={`bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer ${
                clickedIndex === index ? "bg-lime-100" : ""
              }`}
            >
              {/* Image with hover effect */}
              <div className="relative overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${
                    service.title === "Recruitment NON-IT and IT"
                      ? "group-hover:scale-110 group-hover:shadow-2xl"
                      : ""
                  }`} // Add custom scale for specific service
                />
              </div>

              {/* Service info */}
              <div className="p-6 text-left">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
