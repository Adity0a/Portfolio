import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import PortFolio from './components/PortFolio';
import Experiance from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <PortFolio/>
    <Experiance/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}
export default App;
