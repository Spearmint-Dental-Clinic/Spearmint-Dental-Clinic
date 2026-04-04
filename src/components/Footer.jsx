import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import logo from '../assets/logo.png';

export default function Footer() {
    return(
        <Container id="footer" className="p-3 border-top mt-5">
            <Row>
                <Col>
                    <h4 style={{ marginLeft: "90px", marginTop: "20px" }}>
                        <Image src={logo} alt="Team member image" style={{ width: "50px" }} roundedCircle></Image>
                        <span className="headerBrandA">Spearmint</span> <span className="headerBrandB">Dental Clinic</span>
                    </h4>
                </Col>
                <Col>
                    <Nav.Link href="tel:+254701561597"><small>(254) 701-561-597</small></Nav.Link>
                    <Nav.Link href="tel:+254745382230"><small>(254) 745-382-230</small></Nav.Link>
                    <Nav.Link href="mailto:spearmintclinic@gmail.com"><small>spearmintclinic@gmail.com</small></Nav.Link>
                </Col>
            </Row>
        </Container>
    )
}