import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Work from "./Work/Work";
import Studio from "./Studio/Studio";
import Footer from "./Footer/Footer";

function App() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
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
            popup={popup}
            /> 
          }
        />
        <Route 
          path="/work" 
          element={ 
            <Work 
            onClosePopup={handleClosePopup}
            popup={popup}
            /> 
          }
        />
        <Route 
          path="/studio" 
          element={ 
            <Studio 
            onClosePopup={handleClosePopup}
            popup={popup}
            /> 
          }
        />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
