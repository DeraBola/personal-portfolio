import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pic-2.png";
import projImg2 from "../assets/img/vehicle-4.png";
import projImg3 from "../assets/img/feature-img-3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  Some of my most recent projects using the best practices in HTML and CSS and JavaScript.  
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                      <div className="proj-imgbx">
                          <img src={projImg1} />
                          <div className="proj-txtx">
                           <a className="imgbx-link" href="https://app-generator-slip.netlify.app/"><h4> Advice Generator App</h4></a> 
                            <span> Completed a Frontend mentor challenge. This project uses a 3rd-party API. <br></br>The challenge uses the Advice Slip API to generate random quotes of advice</span>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="proj-imgbx">
                          <img src={projImg2} />
                          <div className="proj-txtx">
                            <a className="imgbx-link" href="https://joanmercedes.netlify.app/"><h4>Responsive E-commerce Car Website</h4></a>
                            <span>This project is a static site built using CSS animation, tido chat box, <br></br>data-mansory, data-filter-group for awesome UI and easy navigation. </span>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <div className="proj-imgbx">
                          <img src={projImg3} />
                          <div className="proj-txtx">
                            <a className="imgbx-link" href="https://chi-rubies.netlify.app/"><h4> A Contact Form Page</h4></a>
                            <span>Converted a Figma design to a static website design.<br></br>Meticulous process was followed to achieve detailed UI. </span>
                          </div>
                        </div>    
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
