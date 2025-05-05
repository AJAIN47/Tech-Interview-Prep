import React from 'react';

const learningResources = [
  {
    name: 'LeetCode',
    description: 'Practice coding problems and prepare for interviews.',
    url: 'https://leetcode.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    color: 'bg-yellow-100 dark:bg-yellow-900'
  },
  {
    name: 'HackerRank',
    description: 'Coding challenges and interview preparation.',
    url: 'https://www.hackerrank.com/dashboard',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
    color: 'bg-green-100 dark:bg-green-900'
  },
  {
    name: 'YouTube - NeetCode',
    description: 'Video explanations for coding interview problems.',
    url: 'https://www.youtube.com/c/NeetCode',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    color: 'bg-red-100 dark:bg-red-900'
  },
  {
    name: 'SimplyLearn',
    description: 'Online courses for coding, data science, and more.',
    url: 'https://www.simplilearn.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Simplilearn_logo.png',
    color: 'bg-blue-100 dark:bg-blue-900'
  },
  {
    name: 'GeeksforGeeks',
    description: 'Comprehensive tutorials and coding problems.',
    url: 'https://www.geeksforgeeks.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
    color: 'bg-green-50 dark:bg-green-800'
  }
];

const Learn: React.FC = () => (
  <section>
    <h2 className="text-3xl font-bold text-center text-indigo-900 dark:text-white mb-8">Learn & Practice</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {learningResources.map(resource => (
        <a
          key={resource.name}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-6 ${resource.color} hover:scale-105 transform`}
        >
          <div className="flex items-center mb-4">
            <img src={resource.logo} alt={resource.name} className="h-10 w-10 mr-4 rounded bg-white p-1" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">{resource.name}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-200">{resource.description}</p>
        </a>
      ))}
    </div>
    <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
      All links open in a new tab. Happy learning!
    </div>
  </section>
);

export default Learn; 