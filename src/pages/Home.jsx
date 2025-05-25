// src/pages/Home.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Theater, Feather, Film, Mic, Users, Laugh, BookOpenCheck, Clapperboard, Star, Heart
} from "lucide-react";

const scriptTypes = [
  { name: "Romantic Drama", icon: <Heart className="w-5 h-5 text-pink-500" /> },
  { name: "Tragedy", icon: <Feather className="w-5 h-5 text-red-600" /> },
  { name: "Comedy Drama", icon: <Laugh className="w-5 h-5 text-yellow-500" /> },
  { name: "Monologues", icon: <Mic className="w-5 h-5 text-purple-500" /> },
  { name: "Ensemble Plays", icon: <Users className="w-5 h-5 text-blue-500" /> },
  { name: "Stage Plays", icon: <Theater className="w-5 h-5 text-green-600" /> },
  { name: "Short Scripts", icon: <BookOpenCheck className="w-5 h-5 text-teal-500" /> },
  { name: "Film Scenes", icon: <Film className="w-5 h-5 text-orange-600" /> },
  { name: "TV Dramas", icon: <Clapperboard className="w-5 h-5 text-indigo-500" /> },
  { name: "Award-Winning", icon: <Star className="w-5 h-5 text-lime-600" /> },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        DramaAi - Script Generator
      </motion.h1>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Discover AI-generated drama scripts and scenes across genres — from romance to tragedy — perfect for stage or screen.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {scriptTypes.map((type, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3 border border-gray-200"
          >
            {type.icon}
            <Link
              to="/pages/Name"
              state={{ category: type.name }}
              className="text-lg text-gray-800 hover:underline"
            >
              {type.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
