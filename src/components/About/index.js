import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-image-container">
        <img className="about-image" src={require("../../images/myself.JPG")} />
      </div>
      <div className="about-info-container">
        <h2>Full Stack Developer.</h2>
        <p>
          As seen in the web page title, my name is Chad Aldrich. I currently
          work as a financial analyst for Leidos located in the DC metro area. I
          graduated from James Madison University in 2019 and, desiring to
          progress into more complex subjects, I applied and joined George
          Washington University's coding bootcamp for full-stack web
          development. Ultimately, I’m hoping with these new experiences
          compounded by my previous educational and professional background,
          I’ll leverage myself into a new position working full stack
          development in the tech industry. As for who I am apart from my
          professional goals, I am an avid reader, musician and a passionate DC sports
          fan, especially the Washington Nationals.
        </p>
      </div>
    </div>
  );
}

export default About;
