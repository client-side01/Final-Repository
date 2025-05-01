import React from "react";
import bannerImage from "../assets/banner2.png";
import founderImg from "../assets/Team1.png";
import directorImg from "../assets/Team2.png";

const LeadershipBody = () => {
  return (
    <div>
      {/* Top Banner Section */}
      <div
        className="relative w-full aspect-[612/408] mt-6 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1)), url(${bannerImage})`,
        }}
      >
        <div className="relative z-10 w-full px-6 md:pl-20 text-left">
          <div className="pt-4">
            <div className="w-20 border-t-4 border-blue-400 mb-4"></div>
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-black text-base sm:text-lg font-medium max-w-2xl">
              Led by seasoned professionals, we specialize in strategic
              recruitment and payroll excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Profiles Section */}
      <div className="px-6 md:px-20 py-12 space-y-12">
        {/* Founder and CEO */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8 border-b border-dotted pb-12">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
            <div className="w-[200px] mx-auto">
              <img
                src={founderImg}
                alt="Founder"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl md:hidden font-bold mt-4">Debanjan Roychowdhury</h3>
            <p className="text-blue-400 md:hidden font-semibold mb-2">
              Founder and CEO
            </p>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-4xl font-bold hidden md:block">Debanjan Roychowdhury</h3>
            <p className="text-blue-400 font-semibold mb-2 hidden md:block">
            Founder and CEO
            </p>
            <p className="text-gray-700 mb-2">
            Debanjan Roychowdhury is a visionary leader with a background in life sciences and
              a passion for innovation in HR services. He has played a key role
              in transforming the recruitment landscape through strategic
              thinking and entrepreneurial insight. With over two decades of
              experience, he has led the company to become a recognized name in
              manpower consultancy and recruitment services.
            </p>
          </div>
        </div>

        {/* Co-Founder and Director */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:gap-8  pb-12">
          <div className="w-full md:w-3/4">
            <h3 className="text-4xl font-bold hidden md:block">Nabanita Roychowdhury </h3>
            <p className="text-blue-400 font-semibold mb-2 hidden md:block">
            Co-Founder and Director
            </p>
            <p className="text-gray-700 mb-2">
            Nabanita Roychowdhury  brings a dynamic and multifaceted leadership style shaped
              by her background in finance and media. Her approach to strategy
              and team building has helped guide the company toward consistent
              growth. With years of experience in managing operations and
              aligning them with business goals, she has helped elevate the
              organization in the recruitment sector.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
            <div className="w-[200px] mx-auto">
              <img
                src={directorImg}
                alt="Director"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl md:hidden font-bold mt-4">Nabanita Roychowdhury </h3>
            <p className="text-blue-400 md:hidden font-semibold mb-2">
            Co-Founder and Director
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LeadershipBody;
