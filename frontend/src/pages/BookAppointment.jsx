import { Form, Button, Spinner } from "react-bootstrap";
import { useState } from "react";

export default function BookAppointment() {
    const [isSending, setIsSending] = useState(false);


    return(
        <Form className="p-4 rounded bookingForm mt-5" id="booking">
            <h3 className="sectionHeadings mt-4 mb-3">Book an appointment</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="John Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="john@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="07********" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicService">
                <Form.Label>Select a service</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select a service</option>
                    <option value="generalDentistry">General Dentistry</option>
                    <option value="teethWhitening">Teeth Whitening</option>
                    <option value="dentalImplants">Dental Implants</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="rootCanal">Root Canal</option>
                    <option value="emergencyCare">Emergency Care</option>
                </Form.Select>
            </Form.Group>
            <Button className="bookAppointmentButton" style={{ marginLeft: "350px" }}>
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
        </Form>
    )
}