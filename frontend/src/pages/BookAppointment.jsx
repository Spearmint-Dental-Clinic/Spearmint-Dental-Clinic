import { Form, Button, Spinner, Alert } from "react-bootstrap";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function BookAppointment() {
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const today = new Date().toISOString().split('T')[0];
    const [startDate, setStartDate] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    const [errors, setErrors] = useState([]);

    const submitForm = async () => {
        try {
            setIsSending(true);
            setErrors([])
            emailjs
            .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
                    name: formData.name,
                    date: formData.date,
                    service: formData.service,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                    },{
                        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                    }
                )
            .then(
                () => {
                    alert('Your appointment has been booked.')
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                    setErrors([{msg: 'Server error encountered. Please try again later'}]);
                    return
                }
            )

        } catch (err) {
            console.log(err);
            setErrors([{msg: 'Server error encountered'}])
        } finally {
            setIsSending(false);
        }
    }

    return (
        <Form className="p-4 rounded bookingForm mt-5" id="booking">
            {errors.map((error, index) => (
                <Alert variant='danger' key={index}>{error.msg}</Alert>
            ))}
            <h3 className="sectionHeadings mt-4 mb-3">Book an appointment</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="John Doe" onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name ? formData.name : null} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="john@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email ? formData.email : null} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="07********" onChange={(e) => setFormData({...formData, phone: e.target.value})} value={formData.phone ? formData.phone : null} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Select Appointment Date</Form.Label>
                <Form.Control type="date" min={today} value={formData.date ? formData.date : null} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicService">
                <Form.Label>Select a service</Form.Label>
                <Form.Select aria-label="Select a service" onChange={(e) => setFormData({...formData, service: e.target.value})} value={formData.service ? formData.service : null} required>
                    <option>Select a service</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Study Models">Study Models</option>
                    <option value="Composite Filling">Composite Filling</option>
                    <option value="GIC Filling">GIC Filling</option>
                    <option value="Dental Extraction">Dental Extraction</option>
                    <option value="Children Tooth Extraction">Children Tooth Extraction</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Open Disimpaction">Open Disimpaction</option>
                    <option value="Closed Disimpaction">Closed Disimpaction</option>
                    <option value="Full Mouth Scaling and Polishing">Full Mouth Scaling and Polishing</option>
                    <option value="Oral Prophylaxis">Oral Prophylaxis</option>
                    <option value="Bleaching">Bleaching</option>
                    <option value="Dentures">Dentures</option>
                    <option value="Other">Other(Please specify in a message below)</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormControlArea">
                <Form.Label>Enter a message (optional)</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setFormData({...formData, message: e.target.value})}  value={formData.message} />
              </Form.Group>
            <div className="text-center pb-4 mt-3">
                <Button className="bookAppointmentButton" onClick={submitForm} disabled={!formData.name || !formData.phone || !formData.date || !formData.service}>
                    {isSending ?
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> :
                        null
                    }
                    Submit
                </Button>
            </div>
        </Form>
    )
}
