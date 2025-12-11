import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled 
    ? "bg-coffee-dark/95 backdrop-blur-sm shadow-md py-2" 
    : "bg-coffee-medium py-4";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white text-center ${navClass}`}>
      <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
        <a href="#historia" className="hover:text-cream-light hover:underline font-semibold transition-colors">Historia</a>
        <a href="#menu" className="hover:text-cream-light hover:underline font-semibold transition-colors">Menú</a>
        <a href="#productos" className="hover:text-cream-light hover:underline font-semibold transition-colors">Destacados</a>
        <a href="#galeria" className="hover:text-cream-light hover:underline font-semibold transition-colors">Galería</a>
        <a href="#contacto" className="hover:text-cream-light hover:underline font-semibold transition-colors">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;