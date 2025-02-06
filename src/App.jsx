import "./App.css";
import { Routes, Route } from "react-router-dom";
import Ebook from "./components/Ebook";
import PersonalRisk from "./pages/PersonalRisk";

function App() {
  return (
    <Routes>
      <Route path="/ebook" element={<Ebook />} />
      <Route path="/personal-risk" element={<PersonalRisk />} />
      {/* Add other routes here */}
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
