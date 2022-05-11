import { Container, Row, Col } from "react-bootstrap"
import "./Gallery.css"


const Rooms = (props) => {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="roomCard mb-4">
                            <div className="roomImage">
                                <img src= {props.room.image} />

                                <div className="buttonWrapper">
                                    <a href="/contactUs">
                                        <button className="p-2">{props.room.callToAction}</button>
                                    </a>
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Rooms