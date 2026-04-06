import { Button } from 'react-bootstrap'
import BookingButton from '../components/BookingButton'

export default function Hero() {
    return(
        <div id='hero' className='hero'>
            <div style={{ height: "200px" }}></div>
            <div style={{ width: "50%", color: "white" }} className='p-4'>
                <h1>Spearmint Dental Clinic</h1>
                <p>Spearmint dental clinic provides comprehensive dental care tailored to your needs</p>
                <BookingButton></BookingButton>
            </div>
        </div>
    )
}