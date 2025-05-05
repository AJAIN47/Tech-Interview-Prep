import React from 'react';
import { type Company } from '../types';
import CompanyCard from './CompanyCard';

interface CompanyListProps {
  companies: Company[];
  onCompanyClick: (id: string) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, onCompanyClick }) => {
  const handleCompanyClick = (company: Company) => {
    onCompanyClick(company.id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.length > 0 ? (
        companies.map((company, idx) => (
          <CompanyCard key={company.id} company={company} index={idx} onClick={() => handleCompanyClick(company)} />
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No results found</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            We couldn't find any companies matching your criteria. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default CompanyList;