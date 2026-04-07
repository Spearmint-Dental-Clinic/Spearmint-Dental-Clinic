import { Navbar, Container, Nav, Image } from "react-bootstrap"
import BookingButton from "./BookingButton"
import '../styles/styles.css'
import logo from '../assets/logo.png'

export default function Header() {
    return(
        <>
            <Navbar sticky="top" className="p-0 bg-white d-none d-lg-flex">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="tel:+254701561597"><small>(254) 701-561-597</small></Nav.Link>
                        <Nav.Link href="tel:+254745382230"><small>(254) 745-382-230</small></Nav.Link>
                        <Nav.Link href="mailto:spearmintclinic@gmail.com"><small>spearmintclinic@gmail.com</small></Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text><small>Mon-Fri: 08:00 A.M - 05:00 P.M</small></Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar sticky="top" className="p-4 bg-white shadow" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Image src={logo} alt="Team member image" style={{ width: "50px" }} roundedCircle></Image>
                        <span className="headerBrandA">Spearmint</span> <span className="headerBrandB">Dental Clinic</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <Nav.Link href="#hero" className="text-secondary mx-2">Home</Nav.Link>
                            <Nav.Link href="#services" className="text-secondary mx-2">Services</Nav.Link>
                            <Nav.Link href="#team" className="text-secondary mx-2">Our Team</Nav.Link>
                            {/* <Nav.Link href="#location" className="text-secondary">Location</Nav.Link> */}
                            <Nav.Link href="#footer" className="text-secondary mx-2">Contact</Nav.Link>
                            <BookingButton></BookingButton>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        )
}