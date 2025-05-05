import React, { useState } from 'react';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Interface defining the props for the Header component
interface HeaderProps {
  // Callback function to handle search queries
  onSearch: (query: string) => void;
}

// Header component that provides navigation and search functionality
// Props:
// - onSearch: Callback to handle search queries
const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  // Search query state and handlers
  const [searchQuery, setSearchQuery] = useState('');
  // Dark mode toggle state
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current location for navigation
  const location = useLocation();

  // Handle search input changes
  // Updates local state and triggers parent search handler
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  // Toggle dark mode theme
  // Updates state and applies dark class to document
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 shadow-lg border-b border-indigo-200 dark:border-gray-800 sticky top-0 z-20 transition-colors duration-300">
      {/* Main header container with padding and responsive layout */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and main navigation */}
          <div className="flex items-center space-x-8">
            {/* Application logo and title */}
            <h1 className="text-2xl font-extrabold text-black dark:text-white tracking-tight">
              <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Tech Interview Prep</Link>
            </h1>
            <nav className="hidden md:flex items-center space-x-6 bg-white/60 px-4 py-2 rounded-full shadow border border-indigo-100">
              <Link
                to="/"
                className={`font-semibold px-3 py-1 rounded-full transition-colors ${
                  location.pathname === '/'
                    ? 'bg-black text-white shadow'
                    : 'text-black hover:bg-indigo-100'
                }`}
              >
                Home
              </Link>
              <Link
                to="/learn"
                className={`font-semibold px-3 py-1 rounded-full transition-colors ${
                  location.pathname === '/learn'
                    ? 'bg-black text-white shadow'
                    : 'text-black hover:bg-indigo-100'
                }`}
              >
                Learn
              </Link>
            </nav>
            {/* Only show search bar if not on /learn */}
            {location.pathname !== '/learn' && (
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 ml-4 max-w-md w-72 shadow-inner border border-gray-200">
                <Search className="w-5 h-5 text-black mr-2" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="bg-transparent outline-none w-full text-black"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            )}
          </div>
          {/* Right controls */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200 border border-indigo-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 
                <Sun className="w-5 h-5 text-amber-400" /> : 
                <Moon className="w-5 h-5 text-black" />
              }
            </button>
            <div className="md:hidden ml-2">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200 border border-indigo-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? 
                  <X className="w-5 h-5 text-black" /> : 
                  <Menu className="w-5 h-5 text-black" />
                }
              </button>
            </div>
          </div>
        </div>
        {/* Mobile nav and search */}
        <div className={`md:hidden mt-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-2 mb-3 bg-white/80 rounded-xl p-4 shadow border border-indigo-100">
            <Link
              to="/"
              className={`font-semibold px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/'
                  ? 'bg-black text-white shadow'
                  : 'text-black hover:bg-indigo-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className={`font-semibold px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/learn'
                  ? 'bg-black text-white shadow'
                  : 'text-black hover:bg-indigo-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
          </nav>
          {/* Only show search bar if not on /learn */}
          {location.pathname !== '/learn' && (
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner border border-gray-200">
              <Search className="w-5 h-5 text-black mr-2" />
              <input
                type="text"
                placeholder="Search companies..."
                className="bg-transparent outline-none w-full text-black"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;