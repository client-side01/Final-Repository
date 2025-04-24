import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import About from './components/About'
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import JobOpportunities from "./components/JobOpportunities";
import StatsSection from "./components/StatsSection";
import Navbar from "./components/Navbar";
import CompanyOverview from "./routes/Company";
import Company from "./routes/Company";
import LeaderShip from "./routes/LeaderShip";
import SubmitRequirement from "./routes/SubmitRequirement";
import SubmitResume from "./routes/SubmitResume";
import Categories from "./routes/Categories";
import ServiceOffer from "./routes/ServiceOffer";
import JobOpportunities01 from "./routes/JobOpportunities01";
import Blogs from "./routes/Blogs";
import ContactUs from "./routes/ContactUs";
import SubmitResumeBody from "./routes/SubmitResumeBody";
import ContactUsBody from "./routes/ContactUsBody";

const App = () => {
  return (
    <div className="w-full overflow-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <StatsSection />
              <JobOpportunities />
              {/* <Projects /> */}
              <Footer />
            </>
          }
        />
        <Route path="/CompanyOverview" element={<Company />} />
        <Route path="/LeadershipTeam" element={<LeaderShip />} />
        <Route path="/SubmitRequirement" element={<SubmitRequirement />} />
        <Route path="/ServiceOffer" element={<ServiceOffer />} />
        <Route
          path="/SubmitResume"
          element={
            <>
              <SubmitResume />
              <SubmitResumeBody />
              <Footer />
            </>
          }
        />
        <Route path="/Opportunities" element={<JobOpportunities01 />} />
        <Route path="/Posts" element={<Blogs />} />
        <Route
          path="/Contact"
          element={
            <>
              <ContactUs />
              <ContactUsBody />
              <Footer />
            </>
          }
        />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
      {/* <Header />
      <StatsSection />
      <JobOpportunities />
      <Projects />
      <Footer /> */}
    </div>
  );
};

export default App;
