import React from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';

const ContactItem = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center justify-center mb-10 dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-none p-4 transition-all duration-200 transform hover:scale-105"
  >
    <div className="p-4 bg-primary dark:bg-gray-900 rounded-full shadow-lg dark:shadow-none">
      <Icon size={40} className="text-gray-900 dark:text-gray-100" />
    </div>
    <p className="mt-2 text-gray-900 dark:text-gray-100">{label}</p>
  </a>
);

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-5">Get In Touch</h1>
        <p className="text-lg mb-10">You can reach me through any of the following platforms:</p>
      </div>
      <div className="flex flex-wrap justify-center md:space-x-5">
  <div className="space-y-5 md:space-y-0">
    <ContactItem href="mailto:iamr.karan@gmail.com" Icon={AiOutlineMail} label="Email" />
  </div>
  
    <ContactItem href="https://github.com/iamrkaran" Icon={FaGithub} label="GitHub" />
    <ContactItem href="https://www.codechef.com/users/iamclutchxx" Icon={SiCodechef} label="CodeChef" />
    <ContactItem href="https://www.hackerrank.com/iamr_karan1?hr_r=1" Icon={FaHackerrank} label="HackerRank" />
    <ContactItem href="https://leetcode.com/iamclutchx" Icon={SiLeetcode} label="LeetCode" />
 
</div>

    </div>
  );
};

export default ContactPage;
