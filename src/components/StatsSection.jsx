import React from 'react'
import CountUp from "react-countup";
import { FaDatabase, FaUserTie, FaHandshake, FaUsers } from "react-icons/fa";


const stats = [
    {
      icon: <FaDatabase className="text-black text-5xl" />,
      value: 4,
      suffix: "M+",
      label: "Active Candidate Database",
    },
    {
      icon: <FaUserTie className="text-black text-5xl" />,
      value: 20000,
      suffix: "+",
      label: "Vacancies Closed",
    },
    {
      icon: <FaHandshake className="text-black text-5xl" />,
      value: 1200,
      suffix: "+",
      label: "Clients Served Across India and Abroad",
    },
    {
      icon: <FaUsers className="text-black text-5xl" />,
      value: 80,
      suffix: "+",
      label: "Recruiters",
    },
  ];

const StatsSection = () => {
  return (
    <div className="bg-blue-400 text-white py-10 px-4 flex flex-wrap justify-center gap-12 mt-[-16px]">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center w-[250px]">
          {item.icon}
          <h2 className="text-4xl font-bold mt-2">
            <CountUp start={0} end={item.value} duration={3} />
            {item.suffix}
          </h2>
          <p className="font-medium mt-1">{item.label}</p>
          <div className="w-12 h-1 bg-black mt-2 rounded-full"></div>
        </div>
      ))}
    </div>
  )
}

export default StatsSection