
import React from "react";


function Project({project}) {
    const {
        name,
        repo,
        link,
        description,
        skills
    } = project;

    return(
        <div className="project" key={name} >
            <img src={require(`../../Assets/${name}.jpg`)}
            alt={name} className= "project-bg" 
            
            />
            <div className="project-text">

                
                <h3>
                    <a href={link}>
                        {name}
                    </a>

                    {' '}

                    <a href={repo} > 
                        <i className="fab fa-github"></i>
                    </a>



                </h3>
                <h3>
                    <a href={repo}>
                        {repo}
                    </a>
                </h3>
                <p>{description}</p>
                <a>
                   {skills}
                </a>

            </div>

        </div>
    );
}

export default Project;