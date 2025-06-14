import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Work from "./Work/Work";
import Studio from "./Studio/Studio";
import Account from "./Account/Account";
import Popup from "./Popup/Popup";
import Footer from "./Footer/Footer";

import { CurrentUserContext } from "../../contexts/CurrentUserContetx";
import api from "../../utils/MainApi"
import * as auth from "../../utils/auth";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  const [token, setToken] = useState(localStorage.getItem("jwt") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [popupMode, setPopupMode] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");
    if (storedToken) {
      setToken(storedToken);
      api.setToken(storedToken);

      auth.getToken(storedToken)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Error al verificar token:", err);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && token) {
      api.setToken(token);

      api.getUserInfo()
        .then(setCurrentUser)
        .catch(console.error);
    }
  }, [isLoggedIn, token]);

  function handleRegister({ name, email, password, setError }) {
    auth.register({ name, email, password })
      .then(() => {
        setPopupMode("success");
      })
      .catch((err) => {
        console.error("Error al registrarse:", err);
        if (setError) {
        setError("This email is already registered");
        }
      });
  }

  function handleLogin({ email, password }) {
  auth.authorize({ email, password })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        setToken(data.token);
        api.setToken(data.token);
        setIsLoggedIn(true);
        handleClosePopup();
        navigate("/account");
      }
    })
    .catch((err) => {
      console.error("Error de autenticación:", err);
      if (setError) {
        setError("Incorrect mail or password");
        }
    });
}

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setToken("");
    api.setToken("");
    setIsLoggedIn(false);
    navigate("/");
  }

  function handleOpenPopup(mode) {
    setPopupMode(mode);
  }

  function handleSwitchPopupMode(newMode) {
    setPopupMode(newMode);
  }

  function handleClosePopup() {
    setPopupMode(null);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
      <Header onOpenPopup={handleOpenPopup} isLoggedIn={isLoggedIn} onSignOut={handleSignOut}/>

      <Routes>
        <Route 
          path="/" 
          element={ 
            <Main /> 
          }
        />
        <Route 
          path="/work" 
          element={ 
            <Work  /> 
          }
        />
        <Route 
          path="/studio" 
          element={ 
            <Studio /> 
          }
        />
          <Route 
          path="/account" 
          element={ 
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Account /> 
            </ProtectedRoute> 
          }
        />
      </Routes>

      {popupMode && (
        <Popup mode={popupMode} onClose={handleClosePopup} onSwitch={handleSwitchPopupMode} onRegister={handleRegister} onLogin={handleLogin}/>
      )}
      
      <Footer/>
    </div>
    </CurrentUserContext.Provider>
  )
}

export default App
