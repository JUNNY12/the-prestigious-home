import { Container, Row, Col } from "react-bootstrap"


const Hall = (props) => {

    console.log(props)

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="hallImage mb-4">
                            <img src={props.hall.image} />

                            <div className="buttonWrapper">
                                <a href="/contactUs">
                                    <button className="p-2">{props.hall.callToAction}</button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Hall