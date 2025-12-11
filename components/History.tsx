import React from 'react';

const History: React.FC = () => {
  return (
    <section id="historia" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif text-coffee-dark border-l-8 border-coffee-medium pl-4 mb-8">
        Nuestra Historia
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-gray-700 text-justify">
        <p>
          <span className="font-bold text-coffee-dark">Juan Bizcocho</span> es una cafetería tradicional ubicada en el parque principal de Aguadas, Caldas.
          Conocida por su aroma inconfundible, sus recetas artesanales y su ambiente cálido, ha sido por
          años un lugar emblemático donde locales y visitantes disfrutan de un buen café y del famoso
          "bizcocho aguadeño", patrimonio gastronómico del municipio.
        </p>
        <p>
          En nuestra tradición también resaltamos dos iconos únicos de Aguadas: el <strong>sombrero aguadeño</strong>, 
          símbolo cultural reconocido nacionalmente, y el delicioso <strong>pionono</strong>, un postre típico que 
          endulza las tardes en el parque. Ambos forman parte del encanto que rodea nuestra cafetería y de 
          la identidad de nuestro municipio.
        </p>
      </div>
    </section>
  );
};

export default History;