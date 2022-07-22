import React from 'react'
import "./Project.css"
import Projects from "../../projectdata.json"
function Project(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
   return(
    <div className='all-projects'>
        {
            Projects.map(project =>{
                return(
                    <div className='project' key={project.id}>
                        <img src={`${project.image}`} class="project-image"></img>
                        <div className='project-info'>
                            <h2>{project.name}</h2>
                            <p className='project-description'>{project.description}</p>
                            <h3>Tools used:<br></br></h3>
                            <div className='project-buttons'>
                                <button onClick={() => openInNewTab(project.website)}>Open site</button>
                                <button onClick={() => openInNewTab(project.github)}>View code</button>
                            </div>
                        </div>
                    </div>   
                )
            })
        }
    </div>
   )
    
}

export default Project;