import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";

export default function BookAppointment() {
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: ''
    });
    const [startDate, setStartDate] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    const [successAlert, setSuccessAlert] = useState('');

    // Obtain the list of available times for the selected date
    const getTimes = async (e) => {
        try {
            const date = e.target.value;
            setFormData({...formData, date: date});
            // Call the endpoint to see what times are available using startDate
            const response = await fetch('http://localhost:3000/checkAvailability', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({ date : date })
            });

            let result = await response.json();
            console.log(result)

            if (!response.ok) {
                console.log('Server failure encountered!')
            }

            setAvailableTimes(result.data);
            setStartDate(date);
        } catch (err) {
            console.log(err)
        }
    }

    const submitForm = async () => {
        try {
            setIsSending(true);
            const response = await fetch('http://localhost:3000/book', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                console.log('Server failure encountered!')
            } else {
                setSuccessAlert('Your appointment has been booked.')
            }
        } catch (err) {
            console.log('Error')
        } finally {
            setIsSending(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                service: ''
            })
        }        
    }

    return (
        <Form className="p-4 rounded bookingForm mt-5" id="booking">
            {successAlert !== '' ? <Alert variant='success'>{successAlert}</Alert> : null}
            <h3 className="sectionHeadings mt-4 mb-3">Book an appointment</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="John Doe" onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="john@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="07********" onChange={(e) => setFormData({...formData, phone: e.target.value})} value={formData.phone} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Select Appointment Date</Form.Label>
                <Form.Control type="date" onChange={getTimes} value={formData.date} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTime">
                <Form.Label>Select Appointment Time {startDate == '' ? '(You have to select a date first)' : null}</Form.Label>
                {
                    startDate == '' && formData.date !== '' ?
                    <div>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    </div> : null
                }
                
                <Form.Select aria-label="Select a service" disabled={startDate == ''} onChange={(e) => setFormData({...formData, time: e.target.value})} value={formData.time}> {/* Disable time selection if a date is not selected */}
                    <option>Select a Time</option>
                    {
                        availableTimes.length > 0 ?
                            availableTimes.map((time) => {
                                return <option value={time} key={time}>{time}</option>
                            }) :
                            <option disabled>There are no available times for the selected date.</option>
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicService">
                <Form.Label>Select a service</Form.Label>
                <Form.Select aria-label="Select a service" onChange={(e) => setFormData({...formData, service: e.target.value})} value={formData.service}>
                    <option>Select a service</option>
                    <option value="generalDentistry">General Dentistry</option>
                    <option value="teethWhitening">Teeth Whitening</option>
                    <option value="dentalImplants">Dental Implants</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="rootCanal">Root Canal</option>
                    <option value="emergencyCare">Emergency Care</option>
                </Form.Select>
            </Form.Group>
            <Button className="bookAppointmentButton" style={{ marginLeft: "350px" }} onClick={submitForm}>
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