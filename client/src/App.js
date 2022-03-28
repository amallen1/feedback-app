import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import RoadmapPage from "./pages/RoadmapPage";
import NewFeedbackPage from "./pages/NewFeedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/newfeedback" element={<NewFeedbackPage />} />ß
      </Routes>
    </BrowserRouter>
  );
}

export default App;
