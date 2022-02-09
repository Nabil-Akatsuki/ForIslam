import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Home/Accueil';
import Articles from './pages/Home/Articles';
import Interfacecoran from './pages/Home/Interfacecoran';
import Home from './pages/Home/Home';
import Inscription from './pages/Home/Inscription';
import Entete from './components/Entete';
import Piedpage from './components/Piedpage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Entete loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Accueil setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/articles" element={<Articles />} />
        <Route path="/interfacecoran/*" element={<Interfacecoran />} >
        </Route>
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Piedpage />
    </BrowserRouter>
  );
}

export default App;
