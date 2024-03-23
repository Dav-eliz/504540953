import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const StepTwoProducts = () => {
    const { products } = useContext(MyContext);

    // Filtra los productos para el paso 2
    const stepTwoProducts = products.filter(product => product.step === 2);

    return (
        <div>
            {stepTwoProducts.length > 0 ? (
                stepTwoProducts.map(product => (
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

export default StepTwoProducts;
