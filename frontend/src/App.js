import './App.css';
import React from 'react';
import Navbar from './components/Templates/navbar.js';
import About from './components/Page/About';
import Services from './components/Page/Services';
import Portfolio from './components/Page/Portfolio';
import Testimonial from './components/Page/Testimonial';
import Contect from './components/Page/Contect';
import Footer from './components/Page/Footer';

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contect/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
