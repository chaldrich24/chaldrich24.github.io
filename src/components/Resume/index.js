import React from "react";

function Resume() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <embed type="application/pdf" src={require('../../docs/resume.pdf')} width='850' height='950'></embed>
            <a href={require('../../docs/resume.pdf')} download>Download Resume</a>
        </div>
    )
}

export default Resume;