
import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import CalendarSection from './components/CalendarSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <Header />
      <HeroCarousel />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <AboutSection />
            <CalendarSection />
          </div>
          <div>
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
