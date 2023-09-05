import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";


import {
  BrowserRouter as Router,
} from "react-router-dom";
import GenreMovieList from './components/GenreMovieList';
import Footer from './components/Footer';
//it will wrap your app around a router



function App() {
  return (  
<div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="detail" element={<Detail />} />
          <Route path="/" element={<Home /> } />
          <Route path="login" element={<Login />} />
        </Routes>
        <GenreMovieList />
      </Router>
      <Footer />
    </div>
); // by default everything will have the header page, Switch means turn on this switch ot this swithc, if i see path is detail, i will use detail page, 
//however if the route is a home page then it will have the home component. anything inside of switch case will always change.
}

export default App;
