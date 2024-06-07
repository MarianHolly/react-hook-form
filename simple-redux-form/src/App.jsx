import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StepOne, StepTwo, StepThree, StepFour, Result } from "./steps/steps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StepOne />} />
        <Route path="/step-two" element={<StepTwo />} />
        <Route path="/step-three" element={<StepThree />} />
        <Route path="/step-four" element={<StepFour />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
