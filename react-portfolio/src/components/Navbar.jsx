import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";
import { Link } from 'react-router-dom';


export const Navbar=() => {
    const [menuOpen, setMenuOpen]=useState(false);

    return( 
    <nav className={styles.navbar}>
        
        <a  className={styles.title} href="/">
        <img src={getImageUrl("nav/Logo.png")} alt="Logo" />
        Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen
                ? getImageUrl("nav/close-icon.png")
                : getImageUrl("nav/navbar-icon.png")
            } 
            alt="menu-button"
            onClick={()=> setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/About">About</Link>                </li>
                <li>
                <Link to="/Services">Services</Link>                </li>
                <li>
                <Link to="/Projects">Project</Link>                </li>
                <li>
                <Link to="/Contact">Contact</Link>                </li>
            </ul>
        </div>
    </nav>
    );
};