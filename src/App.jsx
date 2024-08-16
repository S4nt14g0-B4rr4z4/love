import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Detalles from './pages/Detalles';
import Cartas from './pages/Cartas';
import TextoAmor from './pages/TextoAmor';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/cartas" element={<Cartas />} />
        <Route path="/para-ti" element={<TextoAmor />} />
      </Routes>
    </Router>
  );
}

export default App;