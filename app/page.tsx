"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import QuizPage from "./components/QuizPage";
import { ThemeProvider } from "next-themes";
import Leaderboard from "./components/Leaderboard";
import About from "./components/About";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-1">
          {selectedLanguage ? (
            <QuizPage
              language={selectedLanguage}
              onReset={() => setSelectedLanguage(null)}
            />
          ) : (
            <Category onStartQuiz={setSelectedLanguage} />
          )}
          <Leaderboard/>
          <About/>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
