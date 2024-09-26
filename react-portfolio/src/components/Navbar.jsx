import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";

export const Navbar=() => {
    const [menuOpen, setMenuOpen]=useState(false);

    return( 
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img widthclassName={styles.menuBtn} 
            src={
                menuOpen
                ? getImageUrl("nav/close-icon.png")
                : getImageUrl("nav/navbar-icon2.png")
            } 
            alt="menu-button"
            onClick={()=> setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};