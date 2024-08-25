import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Work Experience</p>
          <h2 className="sections--heading">Work Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--content">
              <div className="testimonial--section--left">
                <div className="testimonial--section--right">
                  <img src={item.img} alt="Keross" className="testimonial--image" style={{float: "inline-end"}} />
                </div>
                <h3 className="testimonial--designation" style={{ color: "black", fontSize: "xx-large" }}>{item.designation}</h3>
                <p className="testimonial--company" style={{ color: "gray", fontWeight: "600" }}>{item.comapny_name}</p>
                <p className="testimonial--duration" style={{ "color": "black" }}>{item.duration}</p>
                <br></br>
                <div style={{ marginRight: "50rem", fontFamily: "Roboto, sans-serif" }}>
                  {item.description.split('.').map((des, idx) => (
                    <p className="testimonial--description" style={{ "color": "gray", margin: "5px" }}>
                      {des + "."}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="testimonial--skills">
              {item.skills.split(', ').map((skill, idx) => (
                <span key={idx} className="skill-badge border" style={{
                  color: "black",
                  border: "1px solid black",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  marginRight: "4px",
                  backgroundColor: "lightgray",
                  fontSize: "13px"
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
