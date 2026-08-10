import React from 'react';
import { Container, Row, Col, Ratio } from 'react-bootstrap';

export default function Location() {
    return (
        <Container className='my-5'>
            <Row className='align-items-center g-4'>
                {/* Location details */}
                <Col lg={5}>
                    <h2>Visit our Clinic</h2>
                    <p className='lead text-muted'>
                        We are conveniently located in Nairobi. <br /> Please book an appointment with us.
                    </p>
                    <hr className='my-4' />
                    <ul className='list-unstyled lh-lg'>
                        <li>📍 <strong>Address:</strong> Unipen HPA Dental and Physiotherapy, Hurlingham, Nairobi</li>
                        <li>📞 <strong>Phone:</strong> +254 745 382 230</li>
                        <li>🕒 <strong>Hours:</strong> Mon - Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 1:00 PM</li>
                    </ul>
                </Col>
                {/* Map Column */}
                <Col lg={7}>
                    <Ratio>
                        <iframe 
                            title="Spearmint Dental Clinic Nairobi Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7981856903793!2d36.79644727409819!3d-1.2956839356346346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1100493e7153%3A0x441c0771c930ce00!2sSpearmint%20Dental%20Clinic!5e0!3m2!1sen!2ske!4v1786373060719!5m2!1sen!2ske" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </Ratio>
                </Col>
            </Row>
        </Container>
    )
}