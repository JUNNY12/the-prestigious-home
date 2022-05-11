import { Container,Row, Col } from "react-bootstrap"


const OtherFaclity = (props) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="otherWrapper mb-4">
                            <img src={props.otherItem.image} />
                            <div className="buttonWrapper">
                                <a href="/contactUs">
                                    <button className="p-2">{props.otherItem.callToAction}</button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default OtherFaclity