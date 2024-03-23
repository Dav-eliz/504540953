import { useContext } from "react";
import MyContext from "../context/MyContext";


  const Stepper = () => {
    const { currentStep } = useContext(MyContext);

    return (
      <>
      <div className='stepper flex'>
        <h2 className={currentStep === 1 ? 'active' : ''}>1</h2>
        <h2 className={currentStep === 2 ? 'active' : ''}>2</h2>
        <h2 className={currentStep === 3 ? 'active' : ''}>3</h2>
      </div>
      </>
    );
  };

  export default Stepper;