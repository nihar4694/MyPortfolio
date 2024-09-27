/*
File Name: Projects.jsx
Name: Nihar Dholaria
StudentId: 301348175
Date: 26 - September - 2024
*/

import React from "react";

import styles from "./Projects.module.css";
import { Link } from 'react-router-dom';
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";


console.log('hello')
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};