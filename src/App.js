import './App.css';
import Home from './pages/Home.js';
import Empresa from './pages/Empresa.js';
import Contato from './pages/Contato.js';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
    <div className="App">
          <Navbar/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/" element={<Home />} />
            <Route path='/empresa' element={<Empresa/>} />
            <Route path='/contato' element={<Contato/>} />
          </Routes>
          <Footer/>

    </div>
  </Router>
  );
}

export default App;