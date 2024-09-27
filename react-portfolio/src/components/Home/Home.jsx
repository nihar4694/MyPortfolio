/*
File Name: Home.jsx
Name: Nihar Dholaria
StudentId: 301348175
Date: 26 - September - 2024
*/

import React, {useState} from "react";
import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';

export const Home =() => {
    return(
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nihar</h1>
        <p className={styles.description}>I'm A.I student with 1 year of industry experience in Software Development.My goal is to become A.I engineer in coming time. Reach out if you'd like to learn more!</p>
        <a className={styles.contactBtn} href="mailto:nihardholaria@gmail.com">Contact Me</a>

        </div>
        <img
        className={styles.heroImg} 
        src={getImageUrl("hero/My-photo.png")} alt="Image"/>

        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
}