import React from 'react'
import projects from "../../data/projects.json"
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export const Projects = () => {
  return (
    <section className='pContainer' id='projects'>
        <h2 className='pTitle'>Projects</h2>
        <div className='pProjects'>
            {
                projects.map((project,id)=>{
                    return <ProjectCard key={id} project={project}/>;
                })
            }
        </div>
    </section>
  )
}
