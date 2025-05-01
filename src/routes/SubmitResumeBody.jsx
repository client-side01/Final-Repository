import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const SubmitResumeBody = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you can send the form data to your server or perform validation
    // For now, we'll just log the form submission
    // const formData = new FormData(e.target);
    // const data = {
    //   name: formData.get('name'),
    //   email: formData.get('email'),
    //   phone: formData.get('phone'),
    //   details: formData.get('details'),
    //   resume: formData.get('resume'),
    //   recaptcha: formData.get('recaptcha'),
    // };

    // console.log("Form Data:", data);
    console.log("Form submitted!");
  };
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-3xl font-bold text-black">
              Connect with Talent Track Services - A Leading Recruitment
              Consultancy
            </h2>
          </div>
          <p className="text-gray-600">
            Provide your candidate information to be considered for top job
            opportunities across various industries. As a Top Manpower
            Consultancy, we leverage our extensive network to match you with
            roles that align with your career aspirations.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <h3 className="text-2xl font-bold text-black">Submit Resume</h3>
          </div>
          <form className="space-y-4 " onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-green-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-green-500"
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-green-500"
            />
            <textarea
              placeholder="Additional Details"
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-24 focus:outline-green-500"
            ></textarea>
            <div>
              <input
                type="file"
                className="border border-gray-300 rounded px-4 py-2 w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-2 file:text-sm file:bg-gray-100 file:text-gray-700 cursor-pointer "
              />
            </div>
            {/* <div>
              <label className="block mb-1">Recaptcha</label>
              <div className="border rounded px-2 py-2 bg-gray-100 text-center">
                <p className="text-sm text-gray-400">[Recaptcha Placeholder]</p>
              </div>
            </div> */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Bottom Text */}
        <div className="md:col-span-2 mt-10">
          <p className="text-center text-sm text-black font-semibold uppercase">
            As leading headhunters, we ensure that your journey towards landing
            your dream job is smooth and efficient. Submit your details today
            and take the first step towards your next career milestone with a
            top placement agency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitResumeBody;
