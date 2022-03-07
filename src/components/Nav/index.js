import React from "react";

function Nav(props) {
    const { currentSection, setCurrentSection, sections } = props;

    return (
        <header>
            <h1>Chad Aldrich</h1>
            <nav>
                <ul>
                    {sections.map((section)=> (
                        <li>
                            <span className={currentSection.name === section.name && 'navActive'} onClick={() => setCurrentSection(section)}>{section.name}</span>
                        </li>
                    ))}
                    <li>
                        <a href='https://www.linkedin.com/in/chad-aldrich/' target='_blank'>
                            <i className="fa fa-linkedin fa-2x fa_custom" ></i>
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Nav;