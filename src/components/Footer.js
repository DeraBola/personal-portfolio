import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
 
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <div className="logo" >DERABOLA</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chidera-adu-barnabas-b51966165"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright DERABOLA. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
