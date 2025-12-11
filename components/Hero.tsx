import React from 'react';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-shadow-lg drop-shadow-md">
          Un sabor tradicional en el corazón del parque
        </h2>
        <p className="mt-4 text-xl md:text-2xl font-light">Disfruta el aroma de nuestra tierra</p>
      </div>
    </div>
  );
};

export default Hero;