import './App.css';
import Home from './pages/Home.js';
import Empresa from './pages/Empresa.js';
import Contato from './pages/Contato.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/empresa'>empresa</Link>
            </li>
            <li>
              <Link to='/contato'>Contato</Link>
            </li>
          </ul>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/" element={<Home />} />
            <Route path='/empresa' element={<Empresa/>} />
            <Route path='/contato' element={<Contato/>} />
          </Routes>
      </header>
    </div>
  </Router>
  );
}

export default App;