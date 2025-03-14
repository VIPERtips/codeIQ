"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [username, setUsername] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setUsername(localStorage.getItem("username"));

    // Close menu when clicking outside (for mobile)
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuOpen && (e.target as HTMLElement).closest("#mobile-menu") === null) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  if (!mounted) return null;

  const handleSwitchUser = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("timestamp");
    window.location.reload();
  };

  const handleDeleteUser = async () => {
    if (!username) return;
    if (!confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      return;
    }
    try {
      const response = await fetch(
        `https://codeiq-backend.onrender.com/api/users/delete?username=${username}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        localStorage.removeItem("username");
        localStorage.removeItem("timestamp");
        window.location.reload();
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          CodeIQ
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          {username && (
            <>
              <button
                onClick={handleSwitchUser}
                className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
              >
                Switch User
              </button>
              <button
                onClick={handleDeleteUser}
                className="text-sm text-red-700 dark:text-red-400 hover:underline"
              >
                Delete Profile
              </button>
            </>
          )}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex flex-col items-center space-y-4"
        >
          <NavLinks />
          {username && (
            <>
              <button
                onClick={handleSwitchUser}
                className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
              >
                Switch User
              </button>
              <button
                onClick={handleDeleteUser}
                className="text-sm text-red-700 dark:text-red-400 hover:underline"
              >
                Delete Profile
              </button>
            </>
          )}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      )}
    </header>
  );
}

// Component for Navigation Links
const NavLinks = () => (
  <>
    <a
      href="#quiz"
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    >
      Quiz
    </a>
    <a
      href="#leaderboard"
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    >
      Leaderboard
    </a>
    <a
      href="#about"
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    >
      About
    </a>
  </>
);

// Component for Theme Toggle
const ThemeToggle = ({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) => (
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
    aria-label="Toggle Theme"
  >
    {theme === "dark" ? (
      <Sun className="w-5 h-5 text-yellow-500" />
    ) : (
      <Moon className="w-5 h-5 text-gray-700" />
    )}
  </button>
);
