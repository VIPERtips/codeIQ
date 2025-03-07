"use client";

import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const leaderboardData = [
  { rank: 1, name: "Tips", score: 10 },
  { rank: 2, name: "Austine", score: 8 },
  { rank: 3, name: "President", score: 7 },
];

const Leaderboard: React.FC = () => {
  return (
    <section id="leaderboard" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <Trophy className="w-8 h-8 text-yellow-500 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Leaderboard
          </h2>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6">
          {leaderboardData.map((player) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
