import React from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Header from './components/Header'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Landingpage from './pages/Landingpage'
import {BrowserRouter, Route} from "react-router-dom"


//import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

      <main className="form-signin">
        
        <Route path="/" exact component={Landingpage}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
