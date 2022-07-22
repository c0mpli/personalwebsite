import React from 'react'
import "./Project.css"
import Projects from "../../projectdata"
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function Project(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
   return(
    <div className='all-projects'>
        {
            Projects && Projects.map(project =>{
                return(
                    <div className='project' key={project.id}>
                        <motion.img src={project.image} alt="" class="project-image"></motion.img>
                        <motion.div className='project-info'>
                            <h2>{project.name}</h2>
                            <p className='project-description'>{project.description}</p>
                            <h3>Tools used:</h3>
                            <ul className='tools-used'>
                                {project.tools.map(tool=>{
                                    return(<li>{tool}</li>)
                                    
                                })}
                                
                            </ul>
                            <div className='project-buttons'>
                                <button  onClick={() => openInNewTab(project.website)}>Open site</button>
                                <button onClick={() => openInNewTab(project.github)}>View code</button>
                            </div>
                        </motion.div>
                    </div>   
                )
            })
        }
    </div>
   )
    
}

export default Project;