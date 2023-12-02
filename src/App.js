import { Routes, Route } from "react-router";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route exact path="/"  element={<LandingPage/>}></Route>
    </Routes>
  );
}

export default App;
