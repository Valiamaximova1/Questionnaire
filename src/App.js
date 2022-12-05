import React from 'react';
import {BrowserRouter ,Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Create from './components/Create';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Code from './components/Code';
import Form from './components/Form';

function App() {
 return (
  <BrowserRouter>
  <Navbar />
  <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='create' element={<Create />}></Route>
     <Route path='/notes' element={<Notes />}></Route>
     <Route path='/code' element={<Code />}></Route>
     <Route path='/form' element={<Form />}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
 )
  
}

export default App;
