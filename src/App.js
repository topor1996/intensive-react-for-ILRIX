import React from 'react';
import './style.css';
import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about/:id" element={<AboutPage />}/>
        </Routes>
      </BrowserRouter>              
    </div>  
  );
}

export default App;