import { Image, Container, Row, Col } from "react-bootstrap"

export default function TeamItems({ image, name, description }) {
    return(
        <Container className="teamItem rounded p-3 mt-5 w-75 shadow-lg">
            <Row>
                <Col xs={5} lg={3} className="mb-3">
                    <Image src={image} alt="Team member image" className="w-100" roundedCircle></Image>
                </Col>
                <Col>  
                    <h4>{name}</h4>
                    <p className="text-secondary">{description}</p>
                </Col>
            </Row>
        </Container>
    )
}
