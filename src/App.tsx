import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { companies } from './data/companies';
import { type Company } from './types';
import Header from './components/Header';
import Filters from './components/Filters';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import Footer from './components/Footer';
import SystemArchitecture from './components/SystemArchitecture';
import Learn from './components/Learn';
import { useLocation } from 'react-router-dom';
import Hero from './components/Hero';

// Main application component that manages routing and state
function App() {
  // Get current location for conditional rendering
  const location = useLocation();
  // Flag to determine if we're on the learn page
  const isLearnPage = location.pathname === '/learn';
  
  // State management for the application
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(companies);
  // Currently selected company for detail view
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  // Search query state for filtering companies
  const [searchQuery, setSearchQuery] = useState('');
  // Flag to show/hide system architecture diagram
  const [showArchitecture, setShowArchitecture] = useState(false);
  // Active filters state for filtering companies
  const [activeFilters, setActiveFilters] = useState({
    // Array of selected question types
    questionTypes: [] as string[],
    // Selected interview duration filter
    interviewDuration: null as string | null,
  });

  // Update document title based on selected company
  useEffect(() => {
    document.title = selectedCompany 
      ? `${selectedCompany.name} - Tech Interview Prep` 
      : 'Tech Company Interview Preparation';
  }, [selectedCompany]);

  // Handle search functionality by filtering companies based on query
  const handleSearch = (query: string) => {
    const filteredResults = companies.filter(company =>
      company.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCompanies(filteredResults);
  };

  // Handle filter changes by updating active filters and applying them
  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
    applyFilters(searchQuery, filters);
  };

  // Apply multiple filters to the company list
  const applyFilters = (query: string, filters: any) => {
    let results = companies;
    
    // Apply search query filter
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      results = results.filter(company => 
        company.name.toLowerCase().includes(lowerCaseQuery) ||
        company.description.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    if (filters.questionTypes.length > 0) {
      results = results.filter(company => 
        company.interviewPatterns.questionTypes.some(type => 
          filters.questionTypes.includes(type.type)
        )
      );
    }
    
    if (filters.interviewDuration) {
      results = results.filter(company => {
        const duration = company.interviewPatterns.averageDuration;
        
        switch (filters.interviewDuration) {
          case 'Under 3 weeks':
            return duration.includes('week') && parseInt(duration) < 3;
          case '3-5 weeks':
            return duration.includes('3') || duration.includes('4') || duration.includes('5');
          case '6-8 weeks':
            return duration.includes('6') || duration.includes('7') || duration.includes('8');
          case 'Over 8 weeks':
            return duration.includes('week') && parseInt(duration) > 8;
          default:
            return true;
        }
      });
    }
    
    setFilteredCompanies(results);
  };

  const handleCompanyClick = (id: string) => {
    const company = companies.find(c => c.id === id);
    if (company) {
      setSelectedCompany(company);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackClick = () => {
    setSelectedCompany(null);
  };

  const toggleArchitecture = () => {
    setShowArchitecture(!showArchitecture);
  };

  return (
      <div className="min-h-screen bg-[lightblue] transition-colors duration-300 font-sans">
        <Header onSearch={handleSearch} />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Hero />
          <Routes>
            <Route
              path="/"
              element={
                selectedCompany ? (
                  <CompanyDetail company={selectedCompany} onBack={handleBackClick} />
                ) : (
                  <>
                    <div className="mb-8 text-center">
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Top Tech Company Interview Preparation
                      </h1>
                      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-4">
                        Detailed information about interview processes, question types, and direct links to career pages for the top 20 tech companies in 2024/2025.
                      </p>
                      {/* <button
                        onClick={toggleArchitecture}
                        className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200"
                      >
                        {showArchitecture ? 'Hide Architecture' : 'View System Architecture'}
                      </button> */}
                    </div>
                    {showArchitecture && (
                      <div className="mb-8">
                        <SystemArchitecture />
                      </div>
                    )}
                    {/* <Filters onFilterChange={handleFilterChange} /> */}
                    <CompanyList companies={filteredCompanies} onCompanyClick={handleCompanyClick} />
                  </>
                )
              }
            />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
        <Footer fixed={isLearnPage} />
      </div>
  );
}

export default App;