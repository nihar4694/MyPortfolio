/*
File Name: Services.jsx
Name: Nihar Dholaria
StudentId: 301348175
Date: 26 - September - 2024
*/

import React,{useState} from "react";
import skills from "../../data/skills.json";
import services from "../../data/services.json";
import styles from "./Services.module.css";
import { Link } from 'react-router-dom';

import { getImageUrl } from "../../utils";

export const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill,id)=> {
            return(
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>
                  {skill.title}
                </p>
              </div>
            );
          })}
        </div>

      <ul className={styles.services}>
        {
          services.map((servicesItem, id) =>{
            return(
              <li className={styles.servicesItem} key={id}>
                <div className={styles.servicesItemDetails}>
                  <h3>
                  {`${servicesItem.Service}`}
                  </h3>
                  <ul>
                  <li>
                  {`Cost - ${servicesItem.Cost}`}</li>
                  <li>
                  {`Time Duration - ${servicesItem["Expected-Time"]}`}</li>
                  </ul>
                </div>
              </li>
            )
          })
        }
      </ul>
      </div>
    </section>
  )
}
