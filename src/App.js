import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Home/Accueil';
import Articles from './pages/Home/Articles';
import Home from './pages/Home/Home';
import Inscription from './pages/Home/Inscription';
import Entete from './components/Entete';
import Piedpage from './components/Piedpage';
import Messagerie from './pages/Home/Messagerie';
import UpdatePage from './pages/UpdatePage'
import { useRecoilState } from 'recoil';
import { authState } from './StateGobal/authState';
import { registerState } from './StateGobal/registerState'
import Utilisateurs from './pages/Home/Utilisateurs'
import MailSender from './pages/Home/MailSender';

function App() {
  const [authData, setAuthData] = useRecoilState(authState);
  const [regiState, setRegiState] = useRecoilState(registerState);
  const [controlregiState, setControlregiSate] = useRecoilState(registerState);

  const logOut = () => {
    sessionStorage.removeItem('usersData');
    setAuthData(null)
  }

  useEffect(() => {
    try {
      let userData = sessionStorage.getItem('usersData');
      if (userData.length === 0 || userData === null) {
        return setAuthData(null);

      }
      setAuthData(JSON.parse(userData))
    } catch (error) {
      setAuthData(null)
    }

    return () => {

    }
  }, [])
  return (
    <BrowserRouter>
      <Entete authState={authData} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/home" element={<Home />} />
        {
          authData !== null ? (<>
            <Route path="/articles" element={<Articles />} />
            <Route path="/messagerie" element={<Messagerie />} />
            <Route path='/mailsender' element={<MailSender />} />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
            <Route path="/updatepage" element={<UpdatePage />} />
          </>) : <><Route path="/inscription" element={<Inscription />} /></>
        }
        <Route path="*" element={<Accueil />} />
      </Routes>
      <Piedpage />
    </BrowserRouter>
  );
}

export default App;
