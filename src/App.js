import { useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Snow from "./component/Snow";
import SnowFlake from './asset/snow3.gif'
import Galant from "./component/Galant";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <div className="App">
      <div className='fixed w-full h-screen bg-gray-300 -z-10' style={{ backgroundImage: `url(${SnowFlake})` }}/>
        <Snow />
        <Navbar/>

        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        {/* <Galant /> */}
        {/* <Dashboard /> */}
      
    </div>
  );
}

export default App;
