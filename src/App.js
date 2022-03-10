import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Home/Accueil';
import Articles from './pages/Home/Articles';
import Home from './pages/Home/Home';
import Inscription from './pages/Home/Inscription';
import Entete from './components/Entete';
import Piedpage from './components/Piedpage';
import Messagerie from './pages/Home/Messagerie';
import { useRecoilState } from 'recoil';
import { authState } from './StateGobal/authState';
import {registerState} from './StateGobal/registerState'


function App() {
  const [authData, setAuthData] = useRecoilState(authState);
  const [regiState, setRegiState] = useRecoilState(registerState);
  const [controlregiState, setControlregiSate] = useRecoilState(registerState);
  return (
    <BrowserRouter>
      <Entete authState={authData} />
      <Routes>
        <Route path="/" element={<Accueil  />} />
        <Route path="/home" element={<Home />} />
        {
          authData !== null ? (<>
            <Route path="/articles" element={<Articles />} />
            <Route path="/messagerie" element={<Messagerie />} />
          </>) : null
        }
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Piedpage />
    </BrowserRouter>
  );
}

export default App;
