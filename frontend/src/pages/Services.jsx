import icon from '../assets/Smile.png'
import ServiceBox from '../components/ServiceBox'
import BookingButton from '../components/BookingButton'

export default function Services() {
    const services = [
        {
            'icon': icon,
            'title': 'General Dentistry',
            'text': 'Comprehensive oral health care including check-ups, cleanings, and preventive treatments.'
        },
        {
            'icon': icon,
            'title': 'Teeth Whitening',
            'text': 'Professional whitening treatments to brighten your smile and boost your confidence.',
        },
        {
            'icon': icon,
            'title': 'Dental Implants',
            'text': 'Permanent tooth replacement solutions that look and function like natural teeth.',
        },
        {
            'icon': icon,
            'title': 'Orthodontics',
            'text': 'Braces and aligners to straighten teeth and improve bite alignment.',
        },
        {
            'icon': icon,
            'title': 'Root Canal',
            'text': 'Expert endodontic treatment to save infected teeth and relieve pain.',
        },
        {
            'icon': icon,
            'title': 'Emergency Care',
            'text': 'Immediate dental care for urgent situations and dental emergencies.'
        }
    ]
    return(
        <div id="services" className="pt-4">
            <h1 className="text-center sectionHeadings">Services</h1>
            <p className="text-center text-secondary" style={{ width: "50%", marginLeft: "25%" }}>We offer a comprehensive range of dental services to meet all your oral health needs</p>

            <div className="px-5 d-flex flex-direction-row flex-wrap justify-content-around">
                {services.map((service) => {
                    return <ServiceBox key={service.title} icon={service.icon} title={service.title} text={service.text} />
                })}
            </div>
            <div className="text-center pb-4">
                <BookingButton />
            </div>
        </div>
    )
}