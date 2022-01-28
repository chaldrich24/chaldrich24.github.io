import React from "react";
// src={require({'../../images/charity-project.png'})}

function Project({project}) {

    const {name, github, link, image} = project;

    return (
        <div className="small-projects">
            <a className="project" href={link} target='_blank' rel="noreferrer">
                <img
                    src={require(`../../images/${image}`)}
                    key='lane'
                    className="img-small"
                    alt='project site'
                />
                <h3>{name}</h3>
            </a>
            <a href={github} target='_blank' className="github" rel="noreferrer">GitHub</a>
        </div>
    )
}

export default Project;