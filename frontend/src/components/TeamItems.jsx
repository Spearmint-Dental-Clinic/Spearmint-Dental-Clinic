import { Image, Container, Row, Col } from "react-bootstrap"

export default function TeamItems({ image, name, description }) {
    return(
        <Container className="teamItem rounded p-3 mt-5 w-75 shadow-lg">
            <Row className="w-75 mx-auto">
                <Col xs={6} lg={3} className="mb-3 mx-auto">
                    <Image src={image} alt="Team member image" className="w-100 border border-1" roundedCircle></Image>
                </Col>
                <Col className="pt-3">  
                    <h4>{name}</h4>
                    <p className="text-secondary">{description}</p>
                </Col>
            </Row>
        </Container>
    )
}
