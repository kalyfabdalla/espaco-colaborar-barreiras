
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <svg className="h-8 w-8 text-brand-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Espaço <span className="text-brand-primary">Colaborar</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
