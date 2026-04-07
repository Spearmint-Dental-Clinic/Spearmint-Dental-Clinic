import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import logo from '../assets/logo.png';

export default function Footer() {
    return(
        <Container id="footer" className="p-3 border-top mt-5">
            <Row className="text-center text-md-start align-items-center">
                <Col xs={12} md={4} className="mb-4 mb-md-0">
                    <h4>
                        <Image src={logo} alt="Logo" style={{ width: "30px" }} roundedCircle className="me-1" />
                        <span className="headerBrandA">Spearmint</span> <span className="headerBrandB">Dental Clinic</span>
                    </h4>
                </Col>
                <Col xs={12} md={4} className="mb-4 mb-md-0">
                    <div className="d-flex flex-column align-items-center align-items-md-start">
                        <Nav.Link href="https://maps.app.goo.gl/PHmiMnHmtX8JZMkw6" className="p-1 footerLinks"><small>Unipen HPA Dental and Physiotherapy</small></Nav.Link>
                        <Nav.Link href="https://maps.app.goo.gl/PHmiMnHmtX8JZMkw6" className="p-1 footerLinks"><small>Ground Floor Block B</small></Nav.Link>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="d-flex flex-column align-items-center align-items-md-start">
                        <Nav.Link href="tel:+254701561597" className="p-1 footerLinks"><small>(254) 701-561-597</small></Nav.Link>
                        <Nav.Link href="tel:+254745382230" className="p-1 footerLinks"><small>(254) 745-382-230</small></Nav.Link>
                        <Nav.Link href="mailto:spearmintclinic@gmail.com" className="p-1 footerLinks"><small>spearmintclinic@gmail.com</small></Nav.Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}