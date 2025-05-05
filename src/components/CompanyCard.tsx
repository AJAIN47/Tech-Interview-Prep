import React from 'react';
import { type Company } from '../types';
import { Bookmark, ExternalLink } from 'lucide-react';

// Interface defining the props for the CompanyCard component
interface CompanyCardProps {
  // Company data to display
  company: Company;
  // Index used for background color rotation
  index: number;
  // Callback when card is clicked
  onClick: (id: string) => void;
}

// Array of background color gradients for cards
// Uses a rotation system to provide visual variety
// Each color pair includes light and dark mode variants
const bgColors = [
  "bg-gradient-to-br from-red-100 to-yellow-50 dark:from-red-900 dark:to-yellow-950",
  "bg-gradient-to-br from-blue-100 to-green-50 dark:from-blue-900 dark:to-green-950",
  "bg-gradient-to-br from-fuchsia-100 to-pink-50 dark:from-fuchsia-900 dark:to-pink-950",
  "bg-gradient-to-br from-emerald-100 to-lime-50 dark:from-emerald-900 dark:to-lime-950",
  "bg-gradient-to-br from-cyan-100 to-sky-50 dark:from-cyan-900 dark:to-sky-950",
  "bg-gradient-to-br from-orange-100 to-amber-50 dark:from-orange-900 dark:to-amber-950",
  "bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-violet-900 dark:to-indigo-950",
  "bg-gradient-to-br from-teal-100 to-green-50 dark:from-teal-900 dark:to-green-950",
  "bg-gradient-to-br from-pink-100 to-rose-50 dark:from-pink-900 dark:to-rose-950",
  "bg-gradient-to-br from-yellow-100 to-orange-50 dark:from-yellow-900 dark:to-orange-950",
  "bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-indigo-900 dark:to-blue-900",
  "bg-gradient-to-br from-lime-100 to-green-50 dark:from-lime-900 dark:to-green-950",
  "bg-gradient-to-br from-rose-100 to-fuchsia-50 dark:from-rose-900 dark:to-fuchsia-950",
  "bg-gradient-to-br from-sky-100 to-cyan-50 dark:from-sky-900 dark:to-cyan-950",
  "bg-gradient-to-br from-amber-100 to-orange-50 dark:from-amber-900 dark:to-orange-950",
  "bg-gradient-to-br from-purple-100 to-pink-50 dark:from-purple-900 dark:to-pink-950",
  "bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900 dark:to-emerald-950",
  "bg-gradient-to-br from-blue-100 to-sky-50 dark:from-blue-900 dark:to-sky-950",
  "bg-gradient-to-br from-fuchsia-100 to-violet-50 dark:from-fuchsia-900 dark:to-violet-950",
  "bg-gradient-to-br from-orange-100 to-yellow-50 dark:from-orange-900 dark:to-yellow-950"
];

// CompanyCard component displays a company's information in a card format
// Props:
// - company: Company data to display
// - index: Used for background color rotation
// - onClick: Callback when card is clicked
const CompanyCard: React.FC<CompanyCardProps> = ({ company, index, onClick }) => {
  // Get background color class based on index (rotates through colors)
  const colorClass = bgColors[index % bgColors.length];

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${colorClass}`}
      onClick={() => onClick(company.id)}
    >
      <div className="relative h-40 bg-white p-4 flex items-center justify-center">
        {/* Company logo with size constraints and responsive styling */}
        <img 
          src={company.logo} 
          alt={`${company.name} logo`} 
          className="max-h-full max-w-full object-contain"
          style={{ maxHeight: '80%', maxWidth: '80%' }}
        />
        <div className="absolute top-2 right-2">
          {/* Bookmark button with hover effects and dark mode support */}
          <button 
            className="p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              // TODO: Implement bookmark functionality
            }}
            aria-label="Bookmark company"
          >
            <Bookmark className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{company.name}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">{company.description}</p>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Interview Process</h3>
          <div className="flex flex-wrap gap-2">
            {company.interviewPatterns.stages.map((stage, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
              >
                {stage.name}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Avg. Duration: {company.interviewPatterns.averageDuration}
          </span>
          {/* Career page link with external navigation */}
          <a 
            href={company.careerPages.softwareEngineering}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            Careers <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;