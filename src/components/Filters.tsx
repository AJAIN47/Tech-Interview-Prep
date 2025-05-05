import React, { useState } from 'react';
import { Filter } from 'lucide-react';

// Interface defining the props for the Filters component
interface FiltersProps {
  // Callback function to handle filter changes
  onFilterChange: (filters: FilterState) => void;
}

// Interface defining the filter state structure
interface FilterState {
  // Array of selected question types
  questionTypes: string[];
  // Selected interview duration filter
  interviewDuration: string | null;
}

// Filters component provides filtering options for company list
// Props:
// - onFilterChange: Callback to handle filter changes
const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  // State for filter panel visibility
  const [isOpen, setIsOpen] = useState(false);
  // Current filter state
  const [filters, setFilters] = useState<FilterState>({
    questionTypes: [],
    interviewDuration: null,
  });

  // Available question type filter options
  const questionTypeOptions = [
    'Coding',
    'System Design',
    'Behavioral',
    'Domain Knowledge',
    'Product Sense',
  ];

  const durationOptions = [
    'Under 3 weeks',
    '3-5 weeks',
    '6-8 weeks',
    'Over 8 weeks',
  ];

  // Toggle filter panel visibility
  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  // Handle question type filter changes
  // Toggles the selection of a question type and updates filters
  const handleQuestionTypeChange = (type: string) => {
    const updatedTypes = filters.questionTypes.includes(type)
      ? filters.questionTypes.filter(t => t !== type)
      : [...filters.questionTypes, type];
    
    const updatedFilters = {
      ...filters,
      questionTypes: updatedTypes,
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Handle interview duration filter changes
  // Toggles the selection of a duration filter
  const handleDurationChange = (duration: string) => {
    const updatedFilters = {
      ...filters,
      interviewDuration: filters.interviewDuration === duration ? null : duration,
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Clear all active filters
  const clearFilters = () => {
    const resetFilters = {
      questionTypes: [],
      interviewDuration: null,
    };
    
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        {/* Toggle filter panel button with active count indicator */}
        <button
          onClick={toggleFilter}
          className="flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200"
        >
          <Filter className="w-4 h-4 mr-2" />
          <span>Filters</span>
          {/* Active filters count indicator */}
          {(filters.questionTypes.length > 0 || filters.interviewDuration) && (
            <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-indigo-600 text-white rounded-full">
              {filters.questionTypes.length + (filters.interviewDuration ? 1 : 0)}
            </span>
          )}
        </button>
        
        {/* Clear filters button - only visible when filters are active */}
        {(filters.questionTypes.length > 0 || filters.interviewDuration) && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
          >
            Clear all
          </button>
        )}
      </div>
      
      {isOpen && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Question Types</h3>
              <div className="space-y-2">
                {questionTypeOptions.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300 dark:border-gray-600"
                      checked={filters.questionTypes.includes(type)}
                      onChange={() => handleQuestionTypeChange(type)}
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Interview Duration</h3>
              <div className="space-y-2">
                {durationOptions.map((duration) => (
                  <label key={duration} className="flex items-center">
                    <input
                      type="radio"
                      name="duration"
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600"
                      checked={filters.interviewDuration === duration}
                      onChange={() => handleDurationChange(duration)}
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{duration}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;