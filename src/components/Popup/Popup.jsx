import { useState, useEffect } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register"

function Popup({ mode, onClose }) {
  const [currentMode, setCurrentMode] = useState(mode);

  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const switchToLogin = () => setCurrentMode("login");
  const switchToRegister = () => setCurrentMode("register");
    
    return (
        <div className="popup">
            <div className="popup__container">
              <button
              aria-label="Close modal"
              className="popup__close"
              type="button"
              onClick={onClose}
              >
                  <img src="../../images/closeicon.png" alt="Close Button" />
              </button>
              <h3 className="popup__title">
                {currentMode === "login" ? "LOGIN" : "REGISTER"}
              </h3>

              {currentMode === "login" && <Login onSwitch={switchToRegister} />}
              {currentMode === "register" && <Register onSwitch={switchToLogin} />}
            </div>
        </div>
    )
}

export default Popup;