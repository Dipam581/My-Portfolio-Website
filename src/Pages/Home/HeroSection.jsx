import React from 'react';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm Dipam Ghosh</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> Engineer
            <br />
            & Data Science Enthusiast
          </h1>
          <p className="hero--section-description">
            Officially, I work as a Software Engineer at Keross R&D in Kolkata,
            <br />
            but my true passion lies in Data Science, Machine Learning, and AI.
            <br />
            I love turning data into insights and building intelligent systems.
          </p>
        </div>
        <button className="btn btn-primary">Let’s Collaborate</button>
      </div>
      <div className="hero--section--img">
        <img src="/img/myImg.jpg" alt="Dipam Ghosh Portrait" />
      </div>
    </section>
  );
}
