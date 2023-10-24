//import logo from './logo.svg';
import './App.css';
//import { useEffect, useRef, useState } from 'react';
import React from 'react';
//import Card from './component/Card';
//import MyListComponent from './component/List';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import RegisterForm from './pages/register';
import ResetPassword from './pages/ResetPassword';
//import { List } from 'react-virtualized';

function App() {     // Functional Component

  return (
    <>
      {<BrowserRouter>
        <Routes>
          <Route index element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element = {<ResetPassword />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>}
    </>
  );

}

export default App;
