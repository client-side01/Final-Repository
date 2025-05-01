import { motion } from "framer-motion";
import React from "react";
import { FaBullseye, FaRoute } from "react-icons/fa";
import expertiseImage from "../assets/Aboutt1.png";
import staffingImage from "../assets/Aboutt2.png";
import clientsImage from "../assets/Aboutt3.png";
import bannerImage from "../assets/banner1.png";

const CompanyBody = () => {
  return (
    <div>
      {/* Top Banner Section */}
      <div
        className="relative w-full aspect-[867/280] mt-6 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1)), url(${bannerImage})`,
        }}
      >
        <div className="relative z-10 w-full px-6 md:pl-20 text-left">
          <div className="pt-4">
            <div className="w-20 border-t-4 border-blue-400 mb-4"></div>
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              About Us
            </h2>
            <p className="text-black text-base sm:text-lg font-medium max-w-2xl">
              Providing expert recruitment and payroll services, we help
              businesses find top talent and manage employees efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Our Journey & Our Mission Section */}
      <div className="bg-blue-400 text-White py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Journey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-black mb-4 text-6xl sm:text-8xl">
              <FaRoute />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Since our establishment, <strong>ANDSPL</strong> has been
              committed to delivering top-tier recruitment and payroll solutions
              tailored for every industry. Our roots go back to 1999, and we’ve
              consistently evolved to meet the dynamic workforce demands of both
              startups and enterprises. With years of experience, we've helped
              organizations build reliable teams and scale with confidence.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-black mb-4 text-6xl sm:text-8xl">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At <strong>ANDSPL</strong>, our mission is to connect businesses
              with the right talent and simplify workforce management. We aim to
              be a long-term HR partner, helping our clients grow through
              efficient hiring and seamless payroll support. Our client-first
              approach ensures that every solution we offer aligns perfectly
              with your organizational goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Expertise in Recruitment and Payroll Practices Section */}
      <div className="bg-white text-black py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section - Left */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={expertiseImage}
              alt="Expertise in Recruitment and Payroll"
              className="w-full h-auto object-cover md:max-h-96 rounded-tr-[50px] rounded-br-[50px]"
            />
          </motion.div>

          {/* Text Section - Right */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="pt-4">
              <div className="w-20 border-t-4 border-blue-400 mb-4 mx-auto md:mx-0"></div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Expert in Workforce Recruitment and Payroll Processing
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                <strong>ANDSPL</strong> is a premier consulting firm
                specializing in recruitment and payroll practices. We deliver
                comprehensive manpower solutions to organizations across all
                verticals. As a leading manpower consultancy, our team of top
                Recruitment Consultants provides fast, quality, and
                cost-effective end-to-end manpower solutions to our clients.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Permanent and Contract Staffing Section */}
      <div className="bg-[#f4f4f4] text-black py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Section - Left */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="pt-4">
              <div className="w-20 border-t-4 border-blue-400 mb-4 mx-auto md:mx-0"></div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Skilled in Full-Time and Contractual Hiring
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                As a top recruitment agency, we handle both permanent and
                contract staffing, employing a team of highly dedicated and
                competent consultants from diverse commercial backgrounds. With
                valuable experience and thorough knowledge across a broad range
                of industries, we offer unparalleled, prompt, and effective
                human resource and manpower services.
              </p>
            </div>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={staffingImage}
              alt="Permanent and Contract Staffing"
              className="w-full h-auto object-cover md:max-h-96 rounded-tl-[50px] rounded-bl-[50px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Understanding Our Clients Section */}
      <div className="bg-white text-black py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section - Left */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={clientsImage}
              alt="Understanding Our Clients"
              className="w-full h-auto object-cover md:max-h-96 rounded-tr-[50px] rounded-br-[50px]"
            />
          </motion.div>

          {/* Text Section - Right */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="pt-4">
              <div className="w-20 border-t-4 border-blue-400 mb-4 mx-auto md:mx-0"></div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Focused on Building Deep Client Understanding
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                We strive to understand the intricacies of our clients' needs,
                their corporate culture, and organizational direction. Our
                hallmark is outstanding customer service, backed by best
                practices and sophisticated technology to deliver accountable
                results. In today’s dynamic business environment, having the
                right people is crucial for success and long-term growth. The
                true measure of our success is how effectively we contribute to
                the success of our clients' businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBody;
