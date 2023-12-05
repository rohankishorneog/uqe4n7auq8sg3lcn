import React, { useState } from 'react'
import "./BmiCalculationPage.css"

const BmiCalculationPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  //function to calculate the BMI


  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue < 1.0 || weightValue > 300.0 || heightValue < 0.1 || heightValue > 3.0){
      
      setErrorMessage('Please enter a valid weight (1.0-300.0 kg) and height (0.1-3.0 meters).');
      setBmi(null);


    }
     else {
      const bmiValue = weightValue / Math.pow(heightValue, 2);
      setBmi(bmiValue.toFixed(1));
      setErrorMessage('');
    }
  };


  return (
    <div className='bmiCalculation-main-div'>
      <h3>BMI calculator:</h3>


      <div className='bmiCalculator'>

      <label className='bmi-label'>
        <p>Weight (in kg):</p>
        <input type="number" min="1.0" max="300.0" value={weight} onChange={e => setWeight(e.target.value)} />
      </label>

      <label className='bmi-label'>

        <p>Height (in m):</p>
        <input type='number' min="0.1" max="3.0" value={height} onChange={e => setHeight(e.target.value)} />
      </label>
      <button className='bmi-bttn'
       onClick={calculateBMI}>Calculate BMI</button>
      </div>

      <div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        {bmi !== null && (
          <p>
            Your BMI is: <strong>{bmi}</strong>
          </p>
        )}
      </div>
     

    </div>
  )
}

export default BmiCalculationPage