import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  EditFeedback,
  FeedbackDetail,
  Home,
  Login,
  NewFeedback,
  RoadmapPage,
  SignUp,
} from "./pages";

function App() {
  return (
    <BrowserRouter
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/newfeedback" element={<NewFeedback />} />
        <Route path="/feedback/:id" element={<FeedbackDetail />} />
        <Route path="/edit-feedback/:id" element={<EditFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
