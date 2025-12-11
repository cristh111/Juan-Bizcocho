import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Menu from './components/Menu';
import ProductSection from './components/ProductSection';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-light text-coffee-dark selection:bg-coffee-medium selection:text-white">
      <Navbar />
      <Header />
      <Hero />
      <History />
      <Menu />
      <ProductSection />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;