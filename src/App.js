import { Routes, Route } from "react-router";
import LandingPage from "./Pages/LandingPage/LandingPage";
import BmiCalculationPage from "./Pages/BmiCalculationPage/BmiCalculationPage";

function App() {
  return (
    <Routes>
      <Route exact path="/"  element={<LandingPage/>}></Route>
      <Route exact path="/bmiCalculator" element={<BmiCalculationPage/>}></Route>
    </Routes>
  );
}

export default App;
