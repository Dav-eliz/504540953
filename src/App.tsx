import React, { useState } from 'react';
import './App.css';
// Importa los componentes necesarios aquí...
import MyContext from './context/MyContext';
import Stepper from './quiz02/Stepper';
import Content from './quiz02/Content';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [products] = useState([
    { id: 1, step: 1, name: 'Mouse', price: 60 },
    { id: 2, step: 1, name: 'Monitor', price: 70 },
    { id: 4, step: 2, name: 'Keyboard', price: 80 },
    { id: 5, step: 2, name: 'Headset', price: 90 },
    { id: 6, step: 3, name: 'Tablet', price: 100 },
    { id: 7, step: 3, name: 'Hub', price: 110 }
  ]);

  // Funciones para cambiar el paso actual

  const goToNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const goToPrevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };


  return (
    <MyContext.Provider value={{ currentStep, products, setCurrentStep }}>
      <h1>Quiz 02</h1>
      <Stepper />
      <Content />
      <div className='flex'>
        <button type="button" onClick={goToPrevStep}>Prev</button>
        <button type="button" onClick={goToNextStep}>Next</button>
      </div>
    </MyContext.Provider>
  );
}

export default App;
