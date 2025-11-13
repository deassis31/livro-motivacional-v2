
import { useState } from "react";
import { motion } from "framer-motion";

const pages = [
  "✨ Página 1 — Você é mais forte do que imagina. Nunca desista!",
  "🔥 Página 2 — Cada dia é uma nova chance para vencer!",
  "🌟 Página 3 — Seu esforço de hoje constrói seu sucesso de amanhã!"
];

export default function App() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((i) => (i + 1) % pages.length);
  };

  return (
    <div className='h-screen flex items-center justify-center px-6 text-center'>
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="bg-white text-black p-8 rounded-2xl shadow-xl max-w-lg"
      >
        <p className="text-xl font-semibold mb-6">{pages[index]}</p>

        <button
          onClick={next}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 transition"
        >
          Virar Página ➜
        </button>
      </motion.div>
    </div>
  );
}
