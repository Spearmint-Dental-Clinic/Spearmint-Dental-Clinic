import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Team from './pages/Team';
import BookAppointment from './pages/BookAppointment';
import Footer from './components/Footer';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import chatbot from './assets/chatbot.png'
import './styles/styles.css'

export default function App() {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
            <Header></Header>
            <Hero></Hero>
            <Services></Services>
            <Team></Team>
            <BookAppointment></BookAppointment>
            <Footer></Footer>
            <Button id="chatbotIcon" onClick={handleShow}>
                <img src={chatbot} alt="Chatbot icon" style={{ width: '90%' }} />
            </Button>
        
            <Modal show={show} onHide={handleClose} id="modal">
                <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalBody">
                    Coming soon!
                </Modal.Body>
                <a href="https://www.flaticon.com/free-icons/chatbot" title="chatbot icons" style={{ color: "black", fontSize: "10px", marginLeft: "30%" }}> Chatbot icons created by Freepik - Flaticon</a>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}