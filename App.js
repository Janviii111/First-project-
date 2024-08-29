import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import Background from './Components/Background';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import { Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Elevate from './Components/Elevate';
import 'animate.css';
import ServicesPage2 from './Pages/ServicesPage2';





function App() {

  return (
    <div >

     

      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutPage' element={<AboutPage />} />
          <Route path='/projectPage' element={<ProjectPage />} />
          <Route path='/contactPage' element={<ContactPage />} />
          <Route path='/servicesPage' element={<ServicesPage2 />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
