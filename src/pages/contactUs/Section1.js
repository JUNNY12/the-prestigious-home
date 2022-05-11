import { Container, Row , Col } from "react-bootstrap"
import "./section1.css"
import ContactForm from "./ContactForm"
import contactImg from "./assets/contactUs.png"
import contactMsg from "./assets/message.png"

const Section1 = () => {
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col>
                        <div className="pt-3">
                            <div className="contactHeader">
                                <div className="mt-5 text-center">
                                    <h1>Get in touch with us</h1>
                                </div>

                                <div className="contactImg">
                                    <img src={contactImg} />
                                </div>

                                <div>
                                    <p className="textPara ">
                                        We have a social media presence. 
                                        You can also reach us at the following address.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="address mb-4">
                                    <div>
                                         <span className="icon">
                                             <i class="fa-solid fa-location-dot"></i>
                                         </span>
                                         <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                                            aliqua.
                                         </p>
                                    </div>
                                </div>

                                <div className="openingHourWrapper mb-4">
                                    <span className="icon">
                                        <i class="fa-solid fa-clock"></i>
                                    </span>

                                    <div className="fw-bold hourText">
                                        <span className="me-3">Opening Hour</span>
                                        <span >8:00am - 12:00pm</span>

                                        <div>
                                            <span>
                                                Monday - Sunday
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="callContact mb-4 fw-bold">
                                    <div>
                                        <span className="icon">
                                            <i class="fa-solid fa-phone"></i>
                                        </span>
                                    </div>

                                    <div className="numbers">
                                        <div>(+234)90-XXXX-XXX</div>
                                        <div>(+234)90-XXXX-XXX</div>
                                        <div>(+234)90-XXXX-XXX</div>
                                    </div>
                                </div>

                                <div className="emailContact mb-4 fw-bold">
                                    <div>
                                        <span className="icon"> 
                                            <i class="fa-solid fa-envelope"></i>
                                        </span>
                                    </div>

                                    <div className="emailText">Info@iopsum@gmail.com</div>
                                </div>

                            </div>


                        </div>
                    </Col>

                    <Col>
                        <div className="mt-5">
                           <div className="messageHeader">
                           <h1 className="text-center pt-3">Send  a Message</h1>
                                <div className="contactImg">
                                    <img src={contactMsg} />
                                </div>

                                <div className="textPara">
                                   We would be delighted to hear from you.
                                    Please contact us using our contact form.
                                </div>
                           </div>

                           <div className="formWrapper mt-5 p-4">
                                <h2 className="text-center">Contact Us</h2>

                                <div>
                                    <ContactForm />
                                </div>
                           </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section1
