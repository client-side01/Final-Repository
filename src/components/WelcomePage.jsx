import React from "react";
import mainImage from "../assets/image2.png";

const WelcomePage = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-16 py-10 bg-white min-h-screen md:gap-12">
      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
  <img
    src={mainImage}
    alt="Business Woman and Team"
    className="w-full max-w-lg h-auto object-cover rounded-xl shadow-xl"
  />
</div>


      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 md:ml-4 space-y-4 text-gray-800">
        <h2 className="text-1xl font-semibold text-blue-400">Welcome To</h2>
        <h1 className="text-4xl font-bold text-black">ANDSPL</h1>
        <h3 className="text-1xl font-semibold text-black">
        Expert in Workforce Recruitment and Payroll Processing
        </h3>
        <p>
          ANDSPL is a leading consulting firm specializing in recruitment
          and payroll solutions, designed to meet the dynamic needs of
          businesses across all sectors. We combine industry expertise with a
          personalized approach to deliver strategic manpower services that
          empower organizations to grow and thrive.
          <br />
          Our experienced Talent Acquisition Consultants are skilled at
          identifying the right candidates quickly and efficiently. Whether it’s
          entry-level positions or senior leadership roles, we are committed to
          aligning the right talent with your business objectives.
        </p>

        <h3 className="text-1xl font-semibold text-black">
        Skilled in Full-Time and Contractual Hiring
        </h3>

        <p>
          At ANDSPL, we value long-term partnerships and work closely
          with our clients to understand their evolving workforce needs. Our
          dedication to quality, consistency, and client satisfaction has earned
          us a trusted reputation in the HR consulting space.
          <br />
          With ANDSPL as your recruitment and payroll partner, you gain a
          reliable team focused on delivering value, optimizing workforce
          performance, and driving business success.
        </p>

        <div className="flex flex-wrap items-center justify-left gap-4 md:gap-10">
          <button
            type="button"
            className="w-40 py-3 active:scale-95 transition text-sm text-white rounded-lg bg-blue-400 cursor-pointer hover:bg-blue-500 font-semibold"
          >
            {/* <p className="mb-0.5 ">Read More</p> */}
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
