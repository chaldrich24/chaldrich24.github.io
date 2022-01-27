import React from "react";

function Resume() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <img src={require('../../images/resume.png')} />
            <a href={require('../../docs/ChadAldrich_Resume.docx')} download>Download Resume</a>
        </div>
    )
}

export default Resume;