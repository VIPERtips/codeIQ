"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import QuizPage from "./components/QuizPage";
import { ThemeProvider } from "next-themes";
import UsernameModal from "./components/UsernameModal";
import Leaderboard from "./components/Leaderboard";
import About from "./components/About";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [refreshLeaderboard, setRefreshLeaderboard] = useState(0);

  useEffect(() => {
    setMounted(true);
    const storedUsername = localStorage.getItem("username");
    const storedTime = localStorage.getItem("timestamp");
    if (storedUsername && storedTime) {
      const now = new Date().getTime();
      const expireTime = parseInt(storedTime) + 24 * 60 * 60 * 1000; // 24 hrs
      if (now > expireTime) {
        localStorage.clear();
        window.location.reload();
      } else {
        setUsername(storedUsername);
      }
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-1">
          {!username && <UsernameModal onUsernameSet={setUsername} />}
          {selectedLanguage ? (
            <QuizPage
              language={selectedLanguage}
              onReset={() => setSelectedLanguage(null)}
              onScoreSubmitted={() => setRefreshLeaderboard((prev) => prev + 1)}
            />
          ) : (
            <Category onStartQuiz={setSelectedLanguage} />
          )}
          <Leaderboard refresh={refreshLeaderboard} />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
