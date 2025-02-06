import "./App.css";
import { Routes, Route } from "react-router-dom";
import Ebook from "./components/Ebook";

function App() {
  return (
    <Routes>
      <Route path="/ebook" element={<Ebook />} />
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
