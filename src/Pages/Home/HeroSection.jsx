export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dipam</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I bring 1.8 years of experience as a software engineer at Keross R&D in Kolkata.
            <br /> Passionate about programming and development.
          </p>

        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="public copy/img/myImg.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
