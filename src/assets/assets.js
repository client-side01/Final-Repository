import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import header_img from "./header_img.png";
import brand_img from "./brand_img.png";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";
import client from "./client.jpg";

// Add new navbar assets
import { RiBuilding2Line } from "react-icons/ri";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { GrServices } from "react-icons/gr";
import { GrBusinessService } from "react-icons/gr";
import { GrResume } from "react-icons/gr";
import { MdBusinessCenter } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";



export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
  client,
};

// Add new navbar components
export const navbarData = [
  {
    name: "Home",
    icon: IoHomeOutline,
  },
  {
    name: "About Us",
    subMenu: [
      {
        name: "Company",
        desc: "Overview",
        icon: RiBuilding2Line,
      },
      {
        name: "Team",
        desc: "Leadership",
        icon: PiMicrosoftTeamsLogo,
      },
    ],
  },
  {
    name: "Employer",
    subMenu: [
      {
        name: "Submit",
        desc: "Requirement",
        icon: GrServices,
      },
      {
        name: "Services",
        desc: "We Offer",
        icon: GrBusinessService,
      },
    ],
  },
  {
    name: "Job Opportunities",
    subMenu: [
      {
        name: "Submit",
        desc: "Your CV",
        icon: GrResume,
      },
      {
        name: "Job ",
        desc: "Opportunities",
        icon: MdBusinessCenter,
      }
    ],
  },
  {
    name: "Contact Us",
    icon: BiSolidContact,
  },
];

export const projectsData = [
  {
    title: "Recuritment Non-IT And IT",
    price: "$2,50,000",
    location: "California",
    image: project_img_1,
  },
  {
    title: "Bulk Hiring",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_2,
  },
  {
    title: "Contract / Staffing",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_3,
  },
  {
    title: "Payroll Management",
    price: "$2,50,000",
    location: "Los Angeles",
    image: project_img_4,
  },
  {
    title: "Recruitment Process",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_5,
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];
