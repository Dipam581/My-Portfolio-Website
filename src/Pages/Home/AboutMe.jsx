export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="public copy/img/myImg2.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading" style={{"color":"black"}}>About Me</h1>
          <p className="hero--section-description">
            I'm a Software Engineer with 2 years of hands-on experience, predominantly in machine learning, AI, and Generative AI. I,ve designed and deployed predictive models and fine-tuned large language models using Python and TensorFlow, built scalable data pipelines for real-time inference, and integrated MLOps best practices to ensure reliability in production. My web development background with Django, Flask serves to streamline data-driven applications, but it’s secondary to my core focus on intelligent systems.
          </p>
          <p className="hero--section-description">
            Passionate about transforming data into actionable insights, I,m dedicated to pushing the boundaries of AI—exploring cutting-edge algorithms, crafting end-to-end RAG architectures, and leveraging cloud-native tools to deliver measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}
