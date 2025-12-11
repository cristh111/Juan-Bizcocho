import React from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  { id: '1', name: 'Café negro', price: '$2.500 COP', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=300&q=80' },
  { id: '2', name: 'Café con leche', price: '$3.500 COP', image: 'https://images.unsplash.com/photo-1570968992193-d6ea06651afb?auto=format&fit=crop&w=300&q=80' },
  { id: '3', name: 'Capuchino', price: '$5.000 COP', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=300&q=80' },
  { id: '4', name: 'Chocolate caliente', price: '$4.000 COP', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80' },
  { id: '5', name: 'Jugo natural', price: '$5.000 COP', image: 'https://images.unsplash.com/photo-1613470202243-318d9f588f5f?auto=format&fit=crop&w=300&q=80' },
  { id: '6', name: 'Gaseosa', price: '$3.000 COP', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },
  { id: '7', name: 'Bizcocho Aguadeño', price: '$3.000 COP', image: 'https://images.unsplash.com/photo-1605697666283-74b06b23f854?auto=format&fit=crop&w=300&q=80' },
  { id: '8', name: 'Empanada de carne', price: '$2.000 COP', image: 'https://images.unsplash.com/photo-1628256372886-c30656641549?auto=format&fit=crop&w=300&q=80' },
  { id: '9', name: 'Almojábana', price: '$2.500 COP', image: 'https://images.unsplash.com/photo-1610450953118-e39744428452?auto=format&fit=crop&w=300&q=80' },
  { id: '10', name: 'Pan aliñado', price: '$2.000 COP', image: 'https://images.unsplash.com/photo-1569058242270-dfbf6f45c1f3?auto=format&fit=crop&w=300&q=80' },
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-16 px-6 max-w-4xl mx-auto bg-white rounded-xl shadow-sm my-10">
      <h2 className="text-3xl font-serif text-coffee-dark border-l-8 border-coffee-medium pl-4 mb-8">
        Menú con Precios
      </h2>
      <div className="grid gap-4">
        {menuItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4 hover:bg-cream-light/30 p-2 rounded transition-colors">
            <div className="flex items-center gap-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 object-cover rounded-lg shadow-sm border border-gray-100"
              />
              <span className="font-semibold text-lg text-coffee-dark">{item.name}</span>
            </div>
            <span className="font-bold text-coffee-medium text-lg">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;