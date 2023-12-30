import { calculateBMI } from './BmiCalculationPage';

test('shoul validate inputs and calculate BMI', () => {
  const { bmi, errorMessage } = calculateBMI(70, 1.75);
  expect(bmi).toBe('22.9');
  expect(errorMessage).toBe('');
});

test('should validate height input', () => {
  const { bmi, errorMessage } = calculateBMI(70, 0.05);
  expect(bmi).toBe(0);
  expect(errorMessage).toBe('Please enter a valid height (0.1-3.0 meters).');
});

test('should validate weight input', () => {
  const { bmi, errorMessage } = calculateBMI(0, 1.75);
  expect(bmi).toBe(0);
  expect(errorMessage).toBe('Please enter a valid weight (1.0-300.0 kg).');
});
