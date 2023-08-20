"use client";
import { FiExternalLink, FiGithub  } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdDetails } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";


const SingleProject = ({ project }) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const limitedTech = project.technologies.slice(0, 3);
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8 w-full text-justify">
      <div className="md:w-1/2 overflow-hidden">
        <div className="p-10">
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={400}
            className="object-cover w-full h-[400px] rounded-lg"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 space-y-2">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 ">
          {project.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <p className="text-gray-500 dark:text-gray-300">
          {project.duration.start} - {project.duration.end}
        </p>
        <h3 className="font-bold text-gray-800 dark:text-gray-200">
          Responsibilities:
        </h3>
        <ul className="list-disc pl-5 md:pl-16 space-y-1 text-gray-600 dark:text-gray-400">
          {project.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
        <h3 className="font-bold text-gray-800 dark:text-gray-200">
          Technologies:
        </h3>
    
        <div className="flex flex-wrap">
        {(showAllTech ? project.technologies : limitedTech).map((tech, index) => (
          <span
            key={index}
            className="mr-2 mb-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300
             bg-primary 
            "
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <button
            onClick={() => setShowAllTech(!showAllTech)}
            className="mr-2 mb-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300
           hover:text-primary  dark:hover:hover:text-primary 
            "
          >
           {showAllTech ? 'Less' : `More ${project.technologies.length - 3}`} <AiOutlineArrowDown className="inline-block ml-1" />
          </button>
         
        )}
      </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-4 pt-4 space-y-4 md:space-y-0 md:space-x-4">
          <a
            href={project.projectDetails}
            className="flex-1 text-center text-blue-500 hover:text-dark
             dark:text-blue-400 dark:hover:text-blue-300 rounded-full border-2 border-blue-500 hover:border-primary dark:border-blue-400 dark:hover:border-blue-300 px-4 py-2"
          >
            <MdDetails className="inline-block md:mr-1" /> Project Details
          </a>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-blue-500 hover:text-dark dark:text-blue-400 dark:hover:text-blue-300 rounded-full border-2 border-blue-500 hover:border-primary dark:border-blue-400 dark:hover:border-blue-300 px-4 py-2"
          >
            <FiExternalLink className="inline-block md:mr-1" /> Project Link
          </a>
          <a
            href={project.projectSourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-blue-500 hover:text-dark dark:text-blue-400 dark:hover:text-blue-300 rounded-full border-2 border-blue-500 hover:border-primary dark:border-blue-400 dark:hover:border-blue-300 px-4 py-2"
          >
            <FiGithub className="inline-block md:mr-1" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
