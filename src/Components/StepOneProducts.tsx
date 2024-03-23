import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const StepOneProducts = () => {
    const { products } = useContext(MyContext);

    // Filtra los productos para el paso 1
    const stepOneProducts = products.filter(product => product.step === 1);

    return (
        <div>
            {stepOneProducts.length > 0 ? (
                stepOneProducts.map(product => (
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

export default StepOneProducts;
