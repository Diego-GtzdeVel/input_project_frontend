import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Work from "./Work/Work";
import Studio from "./Studio/Studio";
import Account from "./Account/Account";
import Popup from "./Popup/Popup";
import Footer from "./Footer/Footer";

function App() {
  const [popupMode, setPopupMode] = useState(null);

  function handleOpenPopup(mode) {
    setPopupMode(mode);
  }

  function handleClosePopup() {
    setPopupMode(null);
  }


  return (
    <div className='page'>
      <Header onOpenPopup={handleOpenPopup}/>

      <Routes>
        <Route 
          path="/" 
          element={ 
            <Main 
            onClosePopup={handleClosePopup}
            popupMode={popupMode}
            /> 
          }
        />
        <Route 
          path="/work" 
          element={ 
            <Work 
            onClosePopup={handleClosePopup}
            popupMode={popupMode}
            /> 
          }
        />
        <Route 
          path="/studio" 
          element={ 
            <Studio 
            onClosePopup={handleClosePopup}
            popupMode={popupMode}
            /> 
          }
        />
        <Route 
          path="/account" 
          element={ 
            <Account /> 
          }
        />
      </Routes>

      {popupMode && (
        <Popup mode={popupMode} onClose={handleClosePopup} />
      )}
      
      <Footer/>
    </div>
  )
}

export default App
