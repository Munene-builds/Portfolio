import React from 'react';
import { PiStarFourFill } from 'react-icons/pi';
import { HiArrowUpRight } from 'react-icons/hi2';
import {motion} from "framer-motion";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "3D Isometric House",
      image: "/assets/portfolio-1.png",
      tags: ["Illustrations", "3D Render"],
    },
    {
      id: 2,
      title: "Mobile App Ui Design",
      image: "/assets/portfolio-2.png",
      tags: ["UI Design", "Figma"],
    },
    {
      id: 3,
      title: "Notification Icon",
      image: "/assets/portfolio-3.png",
      tags: ["Illustrations", "3D Render"],
    },
    {
      id: 4,
      title: "Smart Penguin",
      image: "/assets/portfolio-4.png",
      tags: ["Illustrations", "AI Experiment"],
    },
  ];

  return (
    <section className="my-8" id="portfolio">
      {/* Heading */}
      <div className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Portfolio
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Check out my featured <br />
          projects
        </h2>
      </div>

      {/* Project Grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Project Info  */}
            <div className="absolute bottom-4 left-4 right-4 p-3 md:p-6 rounded-2xl bg-black/20 backdrop-blur-md border-t border-white/10 ">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tagText, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-sm rounded-full border border-white/20"
                  >
                    {tagText}
                  </span>
                ))}
              </div>

              {/* Title and Button */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white transition-colors duration-300">{project.title}</h3>
                <button className= " flex items-center w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20  transition-colors duration-300">
                  <HiArrowUpRight className="text-xl" />
                </button>
              </div>
            </div>
            {/* Hover glow effect */}
            <motion.div 
            initial={{ opacity: 0 }}
            whileHover= {{ opacity: 1}}
            transition= {{duration: 0.4}}
            className = "absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10"
            >

              
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
