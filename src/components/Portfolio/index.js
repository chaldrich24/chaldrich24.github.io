import React from "react";
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'nfteez.',
            github: 'https://github.com/chaldrich24/nfteez',
            link: 'https://radiant-springs-59444.herokuapp.com/',
            image: 'nfteez.png'
        },
        {
            name: 'Contactless Menu',
            github: 'https://github.com/lrivales/contactless-menu',
            link: 'https://polar-earth-23819.herokuapp.com/',
            image: 'menu.png'
        },
        {
            name: 'Charity Search',
            github: 'https://github.com/chaldrich24/charity-search',
            link: 'https://chaldrich24.github.io/charity-search/',
            image: 'charity-project.png'
        },
        {
            name: 'Budget Tracker',
            github: 'https://github.com/chaldrich24/budget-tracker',
            link: 'https://desolate-coast-32517.herokuapp.com/',
            image: 'budget-tracker.png'
        },
        {
            name: 'Blog Site',
            github: 'https://github.com/chaldrich24/blog-site',
            link: 'https://guarded-spire-04751.herokuapp.com/',
            image: 'blog-site.png'
        },
        {
            name: 'Note Taker',
            github: 'https://github.com/chaldrich24/note-taker',
            link: 'https://protected-castle-28894.herokuapp.com/',
            image: 'note-taker.png'
        }
    ]


    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <Project project={project} />
                ))
                }
            </div>
        </div>
    )

}

export default Portfolio;