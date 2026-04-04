import TeamItems from "../components/TeamItems"
import BookingButton from "../components/BookingButton"

export default function Team() {
    const teamMembers = [
        {
            'image': 'image',
            'name': 'Dr Daisy',
            'description': 'Dr. Daisy is a highly skilled and dedicated dentist known for her professionalism and warm, friendly approach. She takes the time to understand each patient’s needs, ensuring personalized care in a comfortable and welcoming environment.'
        }
    ]
    return(
        <div>
            <h1 className="text-center sectionHeadings mt-4">Our Team</h1>
            {teamMembers.map((teamMember) => {
                return <TeamItems key={teamMember.name} image={teamMember.image} name={teamMember.name} description={teamMember.description} />
            })}
            <div style={{ marginLeft: "400px", marginTop: "30px" }}>
                <BookingButton></BookingButton>
            </div>
        </div>
    )
}