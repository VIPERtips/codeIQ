"use client";

import { Info } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <motion.div
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5 }}
      className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <Info className="w-8 h-8 text-blue-500 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            About CodeIQ
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
           //viewport={{ once: true }}
        exit={{opacity:0, y:-20}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow p-6"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Welcome to CodeIQ – the ultimate quiz platform built for developers, by a developer.
            Test your coding skills, challenge your problem-solving abilities, and level up your algorithmic game in a dynamic, interactive environment.
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
            <li>Powered by Next.js and React</li>
            <li>Effortless theme switching with next-themes</li>
            <li>Seamless animations via Framer Motion</li>
            <li>Modern icons courtesy of Lucide React</li>
          </ul>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300">
            Code hard, debug harder.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
