import React from "react";
// src={require({'../../images/charity-project.png'})}

function Project({project}) {

    const {name, github, link, image} = project;

    return (
        <div className="small-projects">
            <a className="project" href={link} target='_blank'>
                <img
                    src={require(`../../images/${image}`)}
                    key='lane'
                    className="img-small"
                />
                <h3>{name}</h3>
            </a>
            <a href={github} target='_blank' className="github">GitHub</a>
        </div>
    )
}

export default Project;