import { Container, Row, Col } from "react-bootstrap";
import welcome from "./assets/welcome.jpg"

const Section = () => {

    const facilitiesList =[
        "Banquet Facilities",
        "Bar",
        "Fitness Room",
        "Pedicure Room",
        "Sauna and steam bath",
        "Luggage storage",
        "Non-smoking rooms",
        "Restaurant",
        "Smoking room",
        "Complimentary Wi-Fi internet throughout the entire hotel"
    ]

    const listItems =facilitiesList.map((item) => 
        <li>{item}</li>
    )

    const hotelServices = [
        "Car rental services",
        "Catering services",
        "Concierge services",
        "Excursions and guided tours",
        "Laundry and valet service",
        "Massages",
        "Valet parking"
    ]

    const services = hotelServices.map((service) => 
        <li>{service}</li>
    )

    return (
        <div>
            <div className="text-center mb-4">
                <h1>Services and Facilities</h1>
                <h3 className="fst-italic">Unparalleled service - limitless possibilities</h3>
            </div>
            
              <Container>
                  <Row>
                    <Col xl={12} className="mb-4">
                        <div>
                            <p>
                            The premium hotel amenities provided  us make it a great 
                            choice for your stay in here with us, whether you are traveling 
                            for business or pleasure. The hotel's exquisite
                            surroundings, comfort, thoughtful touches, and 
                            personalized treatment set it apart from other hotels,
                            making you feel at home from the moment you walk in.
                            </p>

                            <p>
                            We strive to meet the demands of each discriminating client, 
                            and here you will find an alphabetical list of the most
                            regularly utilized services and amenities provided by our boutique hotel.
                            </p>
                        </div>

                        <div>
                            <a href="/contactUs">
                              <button className="btnBookPackage">Book a room or Package</button>
                            </a>
                        </div>
                    </Col>
                  </Row>
              </Container>
    
            <Container>
                <Row>

                <Col sm={6}>
                <div>
                    <h1>Hotel Services</h1>
                </div>
                    <div className="list fst-italic">
                        <ul> {services}</ul>
                    </div>
                </Col>

                <Col sm={6}>
                    <div>
                        <h1>Hotel Facilities</h1>
                    </div>
                    <div className="list fst-italic">
                            <ul>{listItems}</ul>
                    </div>
                </Col>
                </Row>
            </Container>

            <div>
                <h1 className="text-center mb-3">Offer and Packages</h1>
            </div>

            <Container>
                <div className="d-flex justify-content-center flex-wrap" style={{columnGap:"15%"}}>
                    <div className="mb-3">

                        <div className="offerWrapper">
                            <img src={welcome} />
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className="mb-3">Advance Purchase</h3>

                            <p>Book in advance and save 10%</p>
                        </div>

                    <a href="/contactUs"> <button className="btnBookOffer">Book Now</button></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section