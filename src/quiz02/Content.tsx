import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Content = () => {
const { currentStep, products } = useContext(MyContext);


  // Determina si el paso actual es uno de los tres pasos definidos
  const isStepDefined = currentStep >= 1 && currentStep <= 3;

  // Filtra los productos basados en el paso actual si está definido, de lo contrario muestra todos
  const displayedProducts = isStepDefined
    ? products.filter(product => product.step === currentStep)
    : products;

  return (
    <div className='card'>
      {displayedProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;