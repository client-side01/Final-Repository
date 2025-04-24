import React from "react";

const ContactUsBody = () => {
  return (
    <div className="bg-white md:px-20 lg:px-32 px-6 py-16">
      <div className=" mx-auto max-w-6xl">
        <div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-3xl md-text-5xl font-bold text-black flex items-center">
              Reach Out to AND Service – Your Leading Manpower Agency
            </h2>
          </div>
          <p className=" mt-4 text-gray-600">
            As a Leading Manpower Consultancy in India, AND Services is
            dedicated to connecting you with top-tier talent. Whether you’re
            looking for a Top Recruitment Agency or Top Head-hunters, we are
            here to serve your hiring needs.
          </p>

          <p className=" mt-4 text-gray-600">
            As a Leading Manpower Consultancy in India, AND Services is
            dedicated to connecting you with top-tier talent. Whether you’re
            looking for a Top Recruitment Agency or Top Head-hunters, we are
            here to serve your hiring needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-35 gap-6 mb-12 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-3">JOB SEEKER</h2>
              <button className="bg-green-500 w-[200px] hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Submit Your CV
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-3">EMPLOYER</h2>
              <button className="bg-green-500 w-[250px] hover:bg-green-700 text-white font-bold px-5 py-2 rounded cursor-pointer">
                Submit Job Requirement
              </button>
            </div>
          </div>
          <div className=" pl-4 mb-4">
            <h3 className="text-3xl md-text-5xl font-bold text-black flex items-center">
              As a Premier Workforce Solutions Provider, We Operate Nationwide
              with a Network of Branch Offices.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 gap-6">
            {["Bangalore", "Delhi", "Gurugram"].map((city) => (
              <div
                key={city}
                className=" bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition duration-300 w-45"
              >
                <img
                  src={`/src/assets/${city.toLowerCase()}.png`}
                  alt={city}
                  className="w-12 h-12 mb-2 cursor-pointer"
                />
                <p className="text-black font-semibold cursor- hover:text-green-600 cursor-pointer">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
