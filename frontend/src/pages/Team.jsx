import TeamItems from "../components/TeamItems"
import BookingButton from "../components/BookingButton"
import drDaisy from '../assets/drDaisy.jpg'

export default function Team() {
    const teamMembers = [
        {
            'image': drDaisy,
            'name': 'Dr. Daisy Masibo Thirikwa',
            'description': 'Dr. Daisy Masibo Thirikwa is a highly skilled and dedicated dentist known for her professionalism and warm, friendly approach. She takes the time to understand each patient’s needs, ensuring personalized care in a comfortable and welcoming environment.'
        }
    ]
    return(
        <div id="team">
            <h1 className="text-center sectionHeadings mt-4">Our Team</h1>
            {teamMembers.map((teamMember) => {
                return <TeamItems key={teamMember.name} image={teamMember.image} name={teamMember.name} description={teamMember.description} />
            })}
            <div className="text-center pb-4 mt-3">
                <BookingButton />
            </div>
        </div>
    )
}
