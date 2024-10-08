/*
File Name: About.jsx
Name: Nihar Dholaria
StudentId: 301348175
Date: 26 - September - 2024
*/

import React, {useState} from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"
import { Link } from 'react-router-dom';

export const About=() =>{
    return( 
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg}
                src={getImageUrl("about/Laptop-photo.png")} alt="Image"/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img className={styles.aboutItemImg} src={getImageUrl("about/cursor-icon.png")} alt="Cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm frontend developer with experience in building responsive websites.
                        </p>
                    </div>
                    </li>

                    <li className={styles.aboutItem}><img className={styles.aboutItemImg} src={getImageUrl("about/server-icon.png")} alt="Server" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I'm Backend developer with experience in building fast and optimised API's.
                        </p>
                    </div>
                    </li>

                    <li className={styles.aboutItem}><img className={styles.aboutItemImg} src={getImageUrl("about/ai-icon.png")} alt="AI" />
                    <div className={styles.aboutItemText}>
                        <h3>Data Scientist</h3>
                        <p>
                            I'm also aspiring Data Scientist with proficiency in python libraries like 'Pandas,Numpy and Scipy'.
                        </p>
                    </div>
                    </li>
                    <li>
                    <a className={styles.contactBtn} href="Nihar Dholaria.pdf" target="_blank">My Resume</a>
                    </li>
                
                </ul>
            </div>
        </section>
    );
};

//export default About;