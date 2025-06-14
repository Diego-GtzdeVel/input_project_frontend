import Login from "../Login/Login";
import Register from "../Register/Register"

function Popup({ mode, onClose, onSwitch, onRegister, onLogin }) {
  const switchToLogin = () => onSwitch("login");
  const switchToRegister = () => onSwitch("register");
    
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
              {mode !== "success" && (
                <h3 className="popup__title">
                  {mode === "login" ? "LOGIN" : "REGISTER"}
                </h3>
              )}

              {mode === "login" && <Login onSwitch={switchToRegister} onLogin={onLogin}/>}
              {mode === "register" && <Register onSwitch={switchToLogin} onRegister={onRegister}/>}
              {mode === "success" && (
                <div className="popup__success">
                  <img className="popup__success-image" src="../../images/success.png" alt="" />
                  <p className="popup__message">YOUR ACCOUNT HAS BEEN CREATED SUCCESSFULLY.</p>
                  <button type="button" className="popup__button" onClick={switchToLogin}>
                    CONTINUE TO LOGIN
                  </button>
                </div>
              )}
            </div>
        </div>
    )
}

export default Popup;