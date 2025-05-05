import React from 'react';
import { type Company } from '../types';
import { ArrowLeft, ExternalLink, Download } from 'lucide-react';

// Interface defining the props for the CompanyDetail component
interface CompanyDetailProps {
  // Company data to display
  company: Company;
  // Callback to navigate back to company list
  onBack: () => void;
}

// CompanyDetail component displays detailed information about a company
// Props:
// - company: Company data to display
// - onBack: Callback to navigate back to company list
const CompanyDetail: React.FC<CompanyDetailProps> = ({ company, onBack }) => {
  // Handle file download functionality
  // Creates a JSON file with company interview preparation data
  const handleDownload = () => {
    const fileData = JSON.stringify(company, null, 2);
    const blob = new Blob([fileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${company.name.toLowerCase().replace(/\s+/g, '-')}-interview-prep.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
      <div className="relative h-60 bg-white dark:bg-gray-900 p-8 flex items-center justify-center">
        {/* Company logo with size constraints and responsive styling */}
        <img 
          src={company.logo} 
          alt={`${company.name} logo`} 
          className="max-h-full max-w-full object-contain"
          style={{ maxHeight: '70%', maxWidth: '70%' }}
        />
        <div className="absolute top-4 left-4">
          {/* Back button with hover effects and dark mode support */}
          <button 
            onClick={onBack} 
            className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <button 
            onClick={handleDownload} 
            className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200 ml-2"
            aria-label="Download company information"
          >
            <Download className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{company.name}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{company.description}</p>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interview Process</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Stages</h3>
              {/* Interview stages timeline with numbered markers */}
              <ol className="relative border-l border-gray-300 dark:border-gray-700 ml-3 space-y-6">
                {company.interviewPatterns.stages.map((stage, index) => (
                  <li key={index} className="ml-6">
                    {/* Stage number marker */}
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full -left-3 ring-8 ring-white dark:ring-gray-800">
                      <span className="text-xs font-medium text-indigo-800 dark:text-indigo-200">{index + 1}</span>
                    </span>
                    {/* Stage name and description */}
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white">{stage.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stage.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Question Types</h3>
              {/* Question types grid with frequency indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company.interviewPatterns.questionTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      {/* Question type name */}
                      <h4 className="font-medium text-gray-900 dark:text-white">{type.type}</h4>
                      {/* Frequency indicator with color coding */}
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        type.frequency === 'High' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                          : type.frequency === 'Medium'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {type.frequency} Frequency
                      </span>
                    </div>
                    {/* Question type description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Process Information</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Average Duration: </span>
                  <span className="text-gray-600 dark:text-gray-400">{company.interviewPatterns.averageDuration}</span>
                </div>
                {company.interviewPatterns.additionalNotes && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Notes: </span>
                    <span className="text-gray-600 dark:text-gray-400">{company.interviewPatterns.additionalNotes}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.youtubeVideos?.map((video, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-white flex-1">{video.title}</h3>
                  <a 
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-200"
                  >
                    Watch
                  </a>
                </div>
                <img 
                  src={video.thumbnail} 
                  alt={`${video.title} thumbnail`} 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div> */}

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Career Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={company.careerPages.softwareEngineering}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-indigo-50 dark:bg-indigo-900/40 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors duration-200"
            >
              <span className="font-medium text-indigo-900 dark:text-indigo-200">Software Engineering</span>
              <ExternalLink className="w-4 h-4 text-indigo-700 dark:text-indigo-300" />
            </a>
            <a 
              href={company.careerPages.dataScience}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-teal-50 dark:bg-teal-900/40 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-colors duration-200"
            >
              <span className="font-medium text-teal-900 dark:text-teal-200">Data Science</span>
              <ExternalLink className="w-4 h-4 text-teal-700 dark:text-teal-300" />
            </a>
            <a 
              href={company.careerPages.productManagement}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/40 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors duration-200"
            >
              <span className="font-medium text-amber-900 dark:text-amber-200">Product Management</span>
              <ExternalLink className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </a>
            <a 
              href={company.careerPages.businessRoles}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors duration-200"
            >
              <span className="font-medium text-blue-900 dark:text-blue-200">Business Roles</span>
              <ExternalLink className="w-4 h-4 text-blue-700 dark:text-blue-300" />
            </a>
          </div>
        </div>

        {company.youtubeVideos && company.youtubeVideos.length > 0 && (
          <section className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">YouTube Tutorials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {company.youtubeVideos.map((video, idx) => (
                <a
                  key={idx}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">{video.title}</div>
                    <div className="text-xs text-blue-600 hover:underline">Watch on YouTube</div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CompanyDetail;