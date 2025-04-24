import React from 'react'
import { assets } from "../assets/assets";
const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Submit Requirement", "Services We Offer", "Industries We Serve"]
        },
        {
            title: "Info",
            links: ["Submit Resume", "Our Search Methodology", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-green-300 text-black">
    <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-black text-black">
        <div>
            <img className="w-32 h-12 md:w-32 cursor-pointer rounded" src={assets.client} alt="dummyLogoColored" />
            <p className="max-w-[410px] mt-6">
            <span className='font-bold'>Address:</span> RG-22, SARKAR BAGAN, RAGHUNATHPUR, KOLKATA 700059
            Name: ADEPT NEXUS DRIVE SERVICES PRIVATE LIMITED
            </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {linkSections.map((section, index) => (
                <div key={index}>
                    <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                    <ul className="text-sm space-y-1">
                        {section.links.map((link, i) => (
                            <li key={i}>
                                <a href="#" className="hover:underline transition">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
    <p className="py-4 text-center text-sm md:text-base text-black">
        Copyright 2025 © ADEPT NEXUS DRIVE SERVICES PRIVATE LIMITED.
    </p>
</div>
  )
}

export default Footer