import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {

  return (
    <div className='page'>
      <Header/>

      <Routes>
        <Route path="/" element={ <Main/> }/>
        <Route path="/work" />
        <Route path="/studio" />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
