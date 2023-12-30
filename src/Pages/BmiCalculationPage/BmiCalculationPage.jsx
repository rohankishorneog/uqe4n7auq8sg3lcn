import  { useState } from 'react';
import "./BmiCalculationPage.css"
import NavBar from '../../Components/NavBar/NavBar';


// function to calculate the BMI
export const calculateBMI = (weight, height) => {
  const weightValue = parseFloat(weight);
  const heightValue = parseFloat(height);

  if (isNaN(weightValue) || weightValue < 1.0 || weightValue > 300.0) {
    return {
      bmi: 0,
      errorMessage: 'Please enter a valid weight (1.0-300.0 kg).',
    };
  } else if (isNaN(heightValue) || heightValue < 0.1 || heightValue > 3.0) {
    return {
      bmi: 0,
      errorMessage: 'Please enter a valid height (0.1-3.0 meters).',
    };
  } else {
    const bmiValue = weightValue / Math.pow(heightValue, 2);
    return {
      bmi: bmiValue.toFixed(1),
      errorMessage: '',
    };
  }
};

const BmiCalculationPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCalculateBMI = () => {
    const { bmi, errorMessage } = calculateBMI(weight, height);
    setBmi(bmi);
    setErrorMessage(errorMessage);
  };

  return (
    <div>
      <NavBar />
      <div className='bmiCalculation-main-div'>
        <h3>BMI calculator:</h3>
        <div className='bmiCalculator'>
          <label className='bmi-label'>
            <p>Weight (in kg):</p>
            <input
              type="number"
              min="1.0"
              max="300.0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className='bmi-label'>
            <p>Height (in m):</p>
            <input
              type="number"
              min="0.1"
              max="3.0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <button className='bmi-bttn' onClick={handleCalculateBMI}>
            Calculate BMI
          </button>
        </div>
        <div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {bmi !== 0 && (
            <p>Your BMI is: <strong>{bmi}</strong></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiCalculationPage;
