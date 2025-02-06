import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ebook from './components/Ebook';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/ebook" element={<Ebook />} />
              {/* Add other routes here */}
          </Routes>
      </Router>
  );
}

export default App;
