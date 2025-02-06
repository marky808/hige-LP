import "./App.css";
import { Routes, Route } from "react-router-dom";
import Ebook from "./pages/Ebook";
import PersonalRisk from "./pages/PersonalRisk";
import Chapter0 from "./pages/EbookChapter0";
import Chapter1 from "./pages/EbookChapter1";
import Chapter2 from "./pages/EbookChapter2";
import Chapter3 from "./pages/EbookChapter3";

function App() {
  return (
    <Routes>
      <Route path="/ebook" element={<Ebook />} />
      <Route path="/ebook/chapter0" element={<Chapter0 />} />
      <Route path="/ebook/chapter1" element={<Chapter1 />} />
      <Route path="/ebook/chapter2" element={<Chapter2 />} />
      <Route path="/ebook/chapter3" element={<Chapter3 />} />
      <Route path="/personal-risk" element={<PersonalRisk />} />
    </Routes>
  );
}

export default App;

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}
