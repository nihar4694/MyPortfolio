/*
import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Experience } from './components/Services/Services';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';


function App() {


  return (
    <div className={styles.App}>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>

    </div>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;
