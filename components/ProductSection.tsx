import React, { useState } from 'react';
import { Product } from '../types';

const products: Product[] = [
  { 
    id: 'p1', 
    name: 'Bizcocho aguadeño artesanal', 
    description: 'El auténtico sabor de nuestra tierra, horneado diariamente.',
    price: '$3.000 COP', 
    image: 'https://images.unsplash.com/photo-1605697666283-74b06b23f854?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'p2', 
    name: 'Café de origen caldense', 
    description: 'Cultivado en las montañas de Caldas, con notas frutales y acidez balanceada.',
    price: '$2.500 COP', 
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'p3', 
    name: 'Chocolate tradicional espeso', 
    description: 'Batido a mano, espumoso y perfecto para el frío.',
    price: '$4.000 COP', 
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'p4', 
    name: 'Almojábanas recién horneadas', 
    description: 'Suaves, quesudas y siempre calientes.',
    price: '$2.500 COP', 
    image: 'https://images.unsplash.com/photo-1610450953118-e39744428452?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'p5', 
    name: 'Pan artesanal', 
    description: 'Hecho con masa madre y mucho amor.',
    price: '$2.000 COP', 
    image: 'https://images.unsplash.com/photo-1569058242270-dfbf6f45c1f3?auto=format&fit=crop&w=600&q=80' 
  },
];

const ProductSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="productos" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif text-coffee-dark border-l-8 border-coffee-medium pl-4 mb-4">
        Productos Destacados
      </h2>
      <p className="mb-10 text-lg text-gray-600">Estos son los productos más vendidos y representativos de la cafetería:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl p-4 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            onClick={() => setSelectedProduct(product)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-coffee-dark mb-1">{product.name}</h3>
            <p className="text-coffee-medium font-bold text-lg mb-4">{product.price}</p>
            <button className="bg-coffee-medium text-white px-4 py-2 rounded-lg hover:bg-coffee-dark transition-colors">
              Ver más
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white p-6 rounded-2xl max-w-md w-full text-center shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-gray-200 text-gray-700 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-serif font-bold text-coffee-dark mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-xl font-bold text-coffee-medium mb-6">{selectedProduct.price}</p>
            <button 
              onClick={() => setSelectedProduct(null)}
              className="bg-coffee-dark text-white px-6 py-2 rounded-xl hover:bg-opacity-90 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;