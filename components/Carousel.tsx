import React, { useState, useEffect, useCallback } from 'react';
import { CarouselImage } from '../types';

const images: CarouselImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80', alt: 'Cafetería acogedora' },
  { id: 2, url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80', alt: 'Compartiendo café' },
  { id: 3, url: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1200&q=80', alt: 'Postres artesanales' },
  { id: 4, url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80', alt: 'Ambiente cafetería tradicional' },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="galeria" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif text-coffee-dark border-l-8 border-coffee-medium pl-4 mb-8">
        Galería
      </h2>
      
      <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group bg-coffee-dark">
        {/* Images */}
        <div 
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img) => (
            <div key={img.id} className="min-w-full h-full relative">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div> {/* Subtle overlay for better text contrast if needed later */}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-coffee-dark/50 hover:bg-coffee-dark/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm shadow-lg border border-white/20"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-coffee-dark/50 hover:bg-coffee-dark/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm shadow-lg border border-white/20"
          aria-label="Siguiente"
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                currentIndex === index ? 'w-8 bg-cream-light' : 'w-2 bg-cream-light/50 hover:bg-cream-light/80'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;