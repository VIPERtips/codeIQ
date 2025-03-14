"use client";

import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LeaderboardProps {
  refresh?: number;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ refresh = 0 }) => {
  const [leaderboardData, setLeaderboardData] = useState<
    { rank: number; name: string; score: number }[]
  >([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchLeaderBoard = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/all-scores?page=${page}&size=5`
        );
        const data = await response.json();
        const formattedData = data.content.map(
          (item: { user: { username: string }; score: number }, index: number) => ({
            rank: page * 5 + index + 1,
            name: item.user.username,
            score: item.score,
          })
        );
        setLeaderboardData(formattedData);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching leaderboard: ", error);
      }
    };
    fetchLeaderBoard();
  }, [page, refresh]);

  return (
    <section id="leaderboard" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-6"
      >
        <div className="flex items-center justify-center mb-8">
          <Trophy className="w-8 h-8 text-yellow-500 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Leaderboard
          </h2>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6">
          {leaderboardData.length > 0 ? (
            leaderboardData.map((player) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: player.rank * 0.1 }}
                className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-4">{player.rank}</span>
                  <span className="text-lg">{player.name}</span>
                </div>
                <span className="text-lg font-semibold">{player.score}</span>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">No scores available</p>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className={`px-4 py-2 mx-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition ${
              page === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Page {page + 1} of {totalPages}
          </span>
          <button
            disabled={page + 1 >= totalPages}
            onClick={() => setPage(page + 1)}
            className={`px-4 py-2 mx-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition ${
              page + 1 >= totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Leaderboard;
