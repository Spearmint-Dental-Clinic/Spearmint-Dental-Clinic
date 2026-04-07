import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Team from './pages/Team';
import BookAppointment from './pages/BookAppointment';
import Footer from './components/Footer';
import Location from './pages/Location';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import chatbot from './assets/chatbot.png'
import send from './assets/send.png'
import './styles/styles.css'

export default function App() {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
                {/* <p style={{ margin: "0" }}>
                    <a href="https://www.flaticon.com/free-icons/send" title="send icons" style={{ color: "black", fontSize: "9px", margin: "0" }}>Send icons created by Bingge Liu - Flaticon</a>
                    <br />
                    <a href="https://www.flaticon.com/free-icons/chatbot" title="chatbot icons" style={{ color: "black", fontSize: "9px", margin: "0" }}> Chatbot icons created by Freepik - Flaticon</a>
                </p> */}
            <Header />
            <Hero />
            <Services />
            <Team />
            <BookAppointment />
            <Footer />
            <Button id="chatbotIcon" onClick={handleShow}>
                <img src={chatbot} alt="Chatbot icon" style={{ width: '90%' }} />
            </Button>
        
            <Modal show={show} onHide={handleClose} id="modal">
                <Modal.Header className='modalHeader' closeButton>
                    <img src={chatbot} alt="Chatbot icon" style={{ width: '40px' }} className="img-fluid" />
                </Modal.Header>
                <Modal.Body id="modalBody" className='d-flex flex-column'>
                    Coming soon!
                    <InputGroup className='mt-auto'>
                        <Form.Control type="name" placeholder="Ask a question" disabled />
                        <Button id="chatbotSend" disabled>
                            <img src={send} alt="Send Icon" style={{ width: "20px", height: "20px" }}  />
                        </Button>
                    </InputGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}