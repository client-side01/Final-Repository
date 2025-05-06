import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

const testimonials = [
  {
    name: "Divya Singh",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Indian woman image
    content:
      "ANDSPL’s recruitment expertise helped us identify highly qualified candidates swiftly. Their understanding of our business needs is truly commendable.",
  },
  {
    name: "Gopal Krishna Vasudevan",
    image: "https://randomuser.me/api/portraits/men/36.jpg", // Indian man image
    content:
      "ANDSPL, a leading manpower consultancy, consistently delivers top talent to our organization. Their top recruitment agency services have streamlined our hiring process, saving us time and resources.",
  },
  {
    name: "Sneha Gupta",
    image: "https://randomuser.me/api/portraits/women/65.jpg", // Indian woman image
    content:
      "We rely on ANDSPL for our staffing requirements, and they never disappoint. Their professional approach and quick turnaround have been a major asset to our HR operations.",
  },
  {
    name: "Ravi Sharma",
    image: "https://randomuser.me/api/portraits/men/44.jpg", // Indian man image
    content:
      "Thanks to ANDSPL, we were able to fill critical positions with top-tier talent. Their consultancy brings efficiency and quality into the hiring process.",
  },
  {
    name: "Pooja Mehta",
    image: "https://randomuser.me/api/portraits/women/12.jpg", // Indian woman image
    content:
      "ANDSPL has become an essential partner in our talent acquisition journey. Their proactive communication and understanding of job roles set them apart.",
  },
  {
    name: "Harsh Yadav",
    image: "https://randomuser.me/api/portraits/men/22.jpg", // Indian man image
    content:
      "We were struggling to find the right candidates until we partnered with ANDSPL. Their recruitment process is smooth, structured, and results-driven.",
  },
  {
    name: "Neha Kapoor",
    image: "https://randomuser.me/api/portraits/women/50.jpg", // Indian woman image
    content:
      "ANDSPL consistently provides exceptional recruitment solutions. Their team is responsive, insightful, and committed to client satisfaction.",
  },
  {
    name: "Amit Desai",
    image: "https://randomuser.me/api/portraits/men/51.jpg", // Indian man image
    content:
      "Our collaboration with ANDSPL has significantly reduced our hiring time. Their access to a strong talent pool and their timely service are remarkable",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
      <div className="h-1 w-16 bg-orange-500 mb-6"></div>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => scroll("left")}
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide w-full"
        >
          {testimonials.map((testimonial, index) => {
            const isExpanded = expanded[index];
            const shortText = testimonial.content.slice(0, 100) + "...";
            return (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-md w-80 bg-blue-100 text-center flex-shrink-0"
              >
                <div className="text-6xl text-orange-300 mb-4">“</div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto mb-2 w-24 h-24 rounded-full border-4 border-orange-400"
                />
                <h3 className="font-bold text-xl text-blue-900">
                  {testimonial.name}
                </h3>
                <p className="italic text-left mt-4 mb-2 text-sm">
                  {isExpanded ? testimonial.content : shortText}
                </p>
                <p
                  onClick={() => toggleReadMore(index)}
                  className="text-orange-500 font-semibold cursor-pointer text-right"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </p>
              </div>
            );
          })}
        </div>

        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => scroll("right")}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
