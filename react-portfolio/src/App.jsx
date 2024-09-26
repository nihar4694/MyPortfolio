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
