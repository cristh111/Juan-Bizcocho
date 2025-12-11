import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark border-t border-coffee-medium/30 py-8 text-center text-cream-light/80">
      <p>© 2025 Cafetería en el Parque - Aguadas, Caldas, Colombia</p>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/573052706561" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform hover:scale-105 animate-bounce-slow"
        style={{boxShadow: '0 4px 12px rgba(0,0,0,0.3)'}}
      >
        <span className="text-xl">📩</span> WhatsApp
      </a>
    </footer>
  );
};

export default Footer;