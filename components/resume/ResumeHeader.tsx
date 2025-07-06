import React from "react";
import { motion } from "framer-motion";

interface ResumeHeaderProps {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  medium: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  name,
  phone,
  email,
  github,
  linkedin,
  medium,
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center p-4 bg-opacity-5 backdrop-filter backdrop-blur-sm"
    >
      <h1 className="text-4xl font-bold text-purple-300 mb-4">{name}</h1>
      <p className="text-lg text-purple-200 flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
        <span>📞 {phone}</span>
        <span>|</span>
        <span>
          ✉️{" "}
          <a href={`mailto:${email}`} className="text-pink-400 hover:underline">
            {email}
          </a>
        </span>
        <span>|</span>
        <a href={github} className="text-pink-400 hover:underline">
          GitHub
        </a>
        <span>•</span>
        <a href={linkedin} className="text-pink-400 hover:underline">
          LinkedIn
        </a>
        <span>•</span>
        <a href={medium} className="text-pink-400 hover:underline">
          Medium
        </a>
      </p>
    </motion.header>
  );
};

export default ResumeHeader;
