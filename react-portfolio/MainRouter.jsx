import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './src/App.module.css';
import { Navbar } from './src/components/Navbar.jsx';
import { Home } from './src/components/Home/Home.jsx';
import { About } from './src/components/About/About.jsx';
import { Services } from './src/components/Services/Services.jsx';
import { Projects } from './src/components/Projects/Projects.jsx';
import { Contact } from './src/components/Contact/Contact.jsx';


const MainRouter = () => {
    return (<div>
    <Navbar/>
    <Routes>

   <Route exact path="/" element={<Home />} />
   <Route exact path="/About" element={<About />} />
   <Route exact path="/Services" element={<Services />} />
   <Route exact path="/Projects" element={<Projects />} />
   <Route exact path="/Contact" element={<Contact />} />
    
    </Routes>
    </div>
    )
   }
   export default MainRouter