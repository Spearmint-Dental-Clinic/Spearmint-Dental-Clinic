import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Team from './pages/Team';
import BookAppointment from './pages/BookAppointment';
import Footer from './components/Footer';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import chatbot from './assets/chatbot.png'
import send from './assets/send.png'
import './styles/styles.css'

export default function App() {
    const [show, setShow] = useState(false);
    const [typing, setTyping] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [messages, setMessages] = useState([
        {
        message: "Hello! How can I help?",
        sender: "bot"
        }
    ]);

    const handleSend = async (text) => {
        const userMessage = {
            message: text,
            sender: "user"
        };

        // Add user message
        setMessages((prev) => [...prev, userMessage]);

        try {
            setTyping(true);
            let response = "Sorry, your request could not be completed. Please try again later or call (254) 701-561-597 or (254) 745-382-230 for emergency inquiries."

            if (text.toLowerCase().includes('price') || text.toLowerCase().includes('pricing') || text.toLowerCase().includes('how much') || text.toLowerCase().includes('cost')) {
                if (text.toLowerCase().includes('consultation')) {
                    response = "The cost is Ksh2,000"
                } else if (text.toLowerCase().includes('study models')) {
                    response = "The cost is Ksh10,000"
                } else if (text.toLowerCase().includes('composite filling') || text.toLowerCase().includes('composite filing')) {
                    response = "The cost is Ksh5,000"
                } else if (text.toLowerCase().includes('gic filing') || text.toLowerCase().includes('gic filling')) {
                    response = "The cost is Ksh5,000"
                } else if (text.toLowerCase().includes('dental extraction')) {
                    response = "The cost is Ksh5,000"
                } else if (text.toLowerCase().includes('children')) {
                    response = "The cost for a dental extraction for children is Ksh2,500"
                } else if (text.toLowerCase().includes('open disimpaction')) {
                    response = "The cost is Ksh20,000"
                } else if (text.toLowerCase().includes('close disimpaction')) {
                    response = "The cost is Ksh7,500"
                } else if (text.toLowerCase().includes('scaling') || text.toLowerCase().includes('polishing')) {
                    response = "The cost is Ksh7,000"
                } else if (text.toLowerCase().includes('oral prophylaxis')) {
                    response = "The cost is Ksh4,000"
                } else if (text.toLowerCase().includes('bleaching')) {
                    response = "The cost for bleaching in office is Ksh45,000 and bleaching at home is 25,000"
                } else if (text.toLowerCase().includes('dentures')) {
                    response = "The cost is Ksh50,000"
                } else if (text.toLowerCase().includes('root canal')) {
                    response = "The cost is Ksh15,000"
                } else {
                    response = "Sorry, I cannot provide that answer at the moment. Please call or send a Whatsapp message to +254701-561-597 or +254745-382-230"
                }
            } else if (text.toLowerCase().includes('time') || text.toLowerCase().includes('day') || text.toLowerCase().includes('when can')) {
                response = "You can make a booking between 08:00 A.M to 05:00 P.M on Mondays to Fridays"
            } else if (text.toLowerCase().includes('schedule') || text.toLowerCase().includes('appointment') || text.toLowerCase().includes('booking') || text.toLowerCase().includes('book')) {
                response = "You can click the 'Book Appointment' button on this website to make an automatic booking or use (254) 701-561-597 or (254) 745-382-230 to make a call or send a Whatsapp message."
            } else if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi') || text.toLowerCase().includes('how are you')) {
                response = "Hello, how can I help you today?"
            } else if (text.toLowerCase().includes('schedule') || text.toLowerCase().includes('appointment') || text.toLowerCase().includes('booking') || text.toLowerCase().includes('book')) {
                response = "You can click the 'Book Appointment' button on this website to make an automatic booking or use (254) 701-561-597 or (254) 745-382-230 to make a call or send a Whatsapp message."
            } else {
                const result = await fetch("https://botsasa-6acp.onrender.com/chatbot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: text, apikey: import.meta.env.VITE_CHATBOT_KEY })
                });
    
                const data = await result.json();
                console.log(data)
                response = data.response
            }

            const botMessage = {
            message: response,
            sender: "bot"
            };

            // Add bot response
            setMessages((prev) => [...prev, botMessage]);
            setTyping(false);
        } catch (error) {
            console.error(error);
            const botMessage = {
            message: "There was an error processing your message. Try again later",
            sender: "bot"
            };
            setMessages((prev) => [...prev, botMessage]);
            setTyping(false);
        }
    };

    return(
        <>
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
                    <MainContainer>
                        <ChatContainer>
                        <MessageList typingIndicator={typing ? <TypingIndicator content="Bot is typing..." /> : null} >
                            {messages.map((msg, index) => (
                                <Message
                                    key={index}
                                    model={{
                                        message: msg.message,
                                        sender: msg.sender,
                                        direction: msg.sender === "user" ? "outgoing" : "incoming"
                                    }}
                                    />
                            ))}
                        </MessageList>
                        <MessageInput placeholder="Type message here..." onSend={handleSend} attachButton={false} />
                        </ChatContainer>
                    </MainContainer>
                    <p className="text-danger" style={{ 'fontSize': '12px' }}><small>These responses are generated by an AI model and are prone to error. Please call or WhatsApp +254701-561-597 for major inquiries.</small></p>
                </Modal.Body>
            </Modal>
        </>
    )
}
