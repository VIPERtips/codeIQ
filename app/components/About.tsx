"use client";

import { Info } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <Info className="w-8 h-8 text-blue-500 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            About
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow p-6"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Welcome to QuizApp! This interactive quiz platform challenges your
            programming skills in a fun and engaging way.
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Built with Next.js and React</li>
            <li>Theme switching with next-themes</li>
            <li>Slick animations powered by Framer Motion</li>
            <li>Icons by Lucide React</li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Developed by Tadiwa Blessed, get ready to level up your coding game!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
