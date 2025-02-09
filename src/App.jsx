import "./App.css";
import PersonalRisk from "./pages/PersonalRisk";
import Chapter0 from "./pages/EbookChapter0";
import Chapter1 from "./pages/EbookChapter1";
import Chapter2 from "./pages/EbookChapter2";
import Chapter3 from "./pages/EbookChapter3";
import { Routes, Route } from "react-router-dom";
import PersonalRiskQuiz from "./pages/PersonalRiskQuiz";
import PersonalRiskResult from "./pages/PersonalRiskResult";
import EBook from "./pages/EBook";
import HigeLp from "./pages/HigeLp";
import PersonalType from "./pages/PersonalType";
import PersonalTypeQuiz from "./pages/PersonalTypeQuiz";
import PersonalTypeResult from "./pages/PersonalTypeResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HigeLp />} />
      <Route path="/hige-lp" element={<HigeLp />} />
      <Route path="/ebook" element={<EBook />} />
      <Route path="/ebook/chapter0" element={<Chapter0 />} />
      <Route path="/ebook/chapter1" element={<Chapter1 />} />
      <Route path="/ebook/chapter2" element={<Chapter2 />} />
      <Route path="/ebook/chapter3" element={<Chapter3 />} />
      <Route path="/personal-risk" element={<PersonalRisk />} />
      <Route path="/personal-risk/quiz" element={<PersonalRiskQuiz />} />
      <Route path="/personal-risk/result" element={<PersonalRiskResult />} />
      <Route path="/personal-type" element={<PersonalType />} />
      <Route path="/personal-type/quiz" element={<PersonalTypeQuiz />} />
      <Route path="/personal-type/result" element={<PersonalTypeResult />} />
    </Routes>
  );
}

export default App;
