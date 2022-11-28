import './App.css';
import Home from './pages/Home.js';
import Empresa from './pages/Empresa.js';
import Contato from './pages/Contato.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
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
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/empresa' element={<Empresa/>}></Route>
            <Route path='/contato' element={<Contato/>}></Route>
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;