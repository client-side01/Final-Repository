import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import JobOpportunities from "./components/JobOpportunities";
import StatsSection from "./components/StatsSection";
import Navbar from "./components/Navbar";

import SubmitRequirement from "./routes/SubmitRequirement";
import SubmitResume from "./routes/SubmitResume";
import Categories from "./routes/Categories";
import ServiceOffer from "./routes/ServiceOffer";
import JobOpportunities01 from "./routes/JobOpportunities01";
import Blogs from "./routes/Blogs";

import ContactUs from "./components/ContactUs";
import SubmitResumeBody from "./routes/SubmitResumeBody";
import ContactUsBody from "./routes/ContactUsBody";
import Services from "./components/Services";
import WelcomePage from "./components/WelcomePage";
import CompanyBody from "./routes/CompanyBody";
import LeaderShipBody from "./routes/LeadershipBody";

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
              <WelcomePage />
              <Services />
              <JobOpportunities />

              <Footer />
            </>
          }
        />
        <Route
          path="/CompanyOverview"
          element={
            <>
              <CompanyBody />
              <Footer />
            </>
          }
        />
        <Route
          path="/LeadershipTeam"
          element={
            <>
              <LeaderShipBody />
              <Footer />
            </>
          }
        />
        <Route path="/SubmitRequirement" element={<SubmitRequirement />} />
        <Route
          path="/ServiceOffer"
          element={
            <>
              <ServiceOffer />
              <Footer />
            </>
          }
        />
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
    </div>
  );
};

export default App;
