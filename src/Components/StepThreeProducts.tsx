import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const StepThreeProducts = () => {
  const { products } = useContext(MyContext);

  // Filtra los productos para el paso 3
  const stepThreeProducts = products.filter(product => product.step === 3);

  return (
    <div>
      {stepThreeProducts.length > 0 ? (
        stepThreeProducts.map(product => (
          <div key={product.id} className='product'>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No hay productos para mostrar en este paso.</p>
      )}
    </div>
  );
};

export default StepThreeProducts;
