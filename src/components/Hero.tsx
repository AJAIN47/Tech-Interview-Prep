import React from "react";

const Hero: React.FC = () => (
  <section className="text-center py-12 px-4 bg-white dark:bg-black rounded-2xl shadow-lg mb-10 font-sans">
    <h1 className="text-4xl sm:text-2xl font-extrabold text-black dark:text-white mb-4 tracking-tight drop-shadow">
      Top Tech Company Interview Prep 2024 / 2025
    </h1>
    <p className="text-lg sm:text-xl text-black dark:text-white max-w-2xl mx-auto mb-6 font-medium">
      Get real interview insights, question patterns, and direct career links for the world's leading tech companies. <br />
      <span className="text-black dark:text-white font-semibold">Start your journey to landing your dream job - right here, right now.</span>
    </p>
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      <span className="inline-block bg-indigo-100 dark:bg-indigo-800 text-black dark:text-white px-4 py-2 rounded-full font-semibold shadow">
        20+ Top Companies
      </span>
      <span className="inline-block bg-blue-100 dark:bg-blue-800 text-black dark:text-white px-4 py-2 rounded-full font-semibold shadow">
        Up-to-date Interview Patterns
      </span>
      <span className="inline-block bg-green-100 dark:bg-green-800 text-black dark:text-white px-4 py-2 rounded-full font-semibold shadow">
        Direct Career Links
      </span>
      <span className="inline-block bg-yellow-100 dark:bg-yellow-800 text-black dark:text-white px-4 py-2 rounded-full font-semibold shadow">
        Curated Learning Resources
      </span>
    </div>
  </section>
);

export default Hero; 