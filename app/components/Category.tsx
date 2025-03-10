"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, PlayCircle, Loader } from "lucide-react"; // Added Loader icon for loading effect

interface CategoryProps {
  onStartQuiz: (language: string) => void;
}

const Category: React.FC<CategoryProps> = ({ onStartQuiz }) => {
  const languages = [
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "react", label: "React" },
    { value: "mysql", label: "MySQL" },
  ];

  const [language, setLanguage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Track loading state

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    setError(null);
  };

  const handleStartQuiz = () => {
    if (!language) {
      setError("Please select a programming language to proceed.");
      return;
    }

    setIsLoading(true); // Set loading to true when the quiz starts

    // Simulate a 5-second loading time before starting the quiz
    setTimeout(() => {
      onStartQuiz(language);
      setIsLoading(false); // Reset loading state after 5 seconds
    }, 2000); // 5000ms = 5 seconds
  };

  return (
    <section id="quiz" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white flex items-center justify-center">
          <Code className="mr-2 w-8 h-8 text-blue-500" /> {/* Icon for the category */}
          Select Your Programming Language
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-600 dark:text-gray-300">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-gray-50 border border-gray-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">-- Choose a Language --</option>
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
              <div className="mt-4 text-center">
                <button
                  onClick={handleStartQuiz}
                  disabled={isLoading} // Disable button when loading
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mx-auto ${
                    isLoading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {isLoading ? (
                    <Loader className="animate-spin mr-2 w-6 h-6" /> // Spinner icon when loading
                  ) : (
                    <PlayCircle className="mr-2 w-6 h-6" />
                  )}
                  {isLoading ? "Loading..." : "Start Quiz"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Category;
