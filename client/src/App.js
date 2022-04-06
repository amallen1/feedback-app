import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  SignUp,
  Home,
  RoadmapPage,
  NewFeedback,
  FeedbackDetail,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/newfeedback" element={<NewFeedback />} />
        <Route path="/feedback/:id" element={<FeedbackDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
