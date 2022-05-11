import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"


const Footer = () => {

    return(
        <div className="footer mt-4 p-5 ">
            <Container fluid>
                <Row >
                    <Col >
                        <div className="mb-3">
                            <h3>The Prestigious Home</h3>

                            <div className="demoText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="mb-3">
                            <h5>Explore</h5>

                            <div>
                            <ul>
                                <Link to="/" style={{textDecoration:"none"}}>
                                <li>
                                        Home
                                    </li>
                                </Link>

                                <Link to="/services" style={{textDecoration:"none"}}>
                                <li>
                                    Services
                                    </li>
                                </Link>

                                <Link to="/gallery" style={{textDecoration:"none"}}>
                                        <li>
                                            Gallery
                                        </li>
                                </Link>

                                <Link to="/contactUs" style={{textDecoration:"none"}}>
                                    <li>
                                            Contact Us
                                        </li>
                                </Link>
                             </ul>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="mb-3">
                           <h5>Visit</h5>
                           <div className="demoText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="mb-3">
                           <h5 className="text-center">Follow Us</h5>
                           <div className="icons">
                               <div className="footerIcon">
                                    <i class="fa-brands fa-facebook"></i>
                                </div>
                               <div className="footerIcon">
                                    <i class="fa-brands fa-instagram"></i>
                               </div>
                               <div className="footerIcon">
                                    <i class="fa-brands fa-twitter"></i>
                               </div>
                               <div className="footerIcon">
                                    <i class="fa-brands fa-tiktok"></i>
                               </div>
                           </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Footer