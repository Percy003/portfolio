import React from 'react';
import { getImageUrl } from '../../utils';
import './ProjectCard.css'

export const ProjectCard = ({ project:{title,imageSrc,description,skills,demo,source}}) => {
  return (
    <div className='pcContainer'>
         <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className='pcImage' /> 
             <h3 className='pcTitle'>{title}</h3>
                <p className='pcDescription'>{description}</p>
                  <ul className='pcSkills'>
                     {skills.map((skill,id)=>{
                       return (<li key={id} className='pcSkill'>{skill}</li>);
                    })}
                  </ul>
                <div className='pcLinks'>
                    <a href={demo} className='pcLink'>Demo</a>
                    <a href={source} className='pcLink'>Source</a>
                </div>
     </div>
  )
}
