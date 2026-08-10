import { Button } from 'react-bootstrap'
import BookingButton from '../components/BookingButton'

export default function Hero() {
    return(
        <div id='hero' className='hero'>
            <div style={{ height: "200px" }}></div>
            <div xs={9} lg={3} style={{ color: "white" }} className='p-4'>
                <h1>Spearmint Dental Clinic Nairobi</h1>
                <p>Spearmint Dental Clinic Nairobi provides the most comprehensive dental care in Nairobi tailored to your needs</p>
                <BookingButton></BookingButton>
            </div>
        </div>
    )
}