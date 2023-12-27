import { useState } from 'react';
import Header from './components/Header';
import './App.scss';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plan from './components/Pricing/Plan';

function App() {
  return (
    <Router>
     
       <Header></Header>
        
          <Routes>
            <Route exact path="/" element={<Home></Home>}> </Route>
           <Route path='/pricing' element={<Plan></Plan>}> </Route>
           <Route path='/about' element={<About></About>}></Route>
          </Routes>
        
        
      </Router>
      
  
  );
}

export default App;
