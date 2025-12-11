import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-coffee-dark text-white pt-24 pb-12 text-center shadow-lg px-4">
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">Juan Bizcocho</h1>
      <p className="text-lg md:text-xl font-light opacity-90">Cafetería en el Parque — Aguadas, Caldas, Colombia</p>
    </header>
  );
};

export default Header;