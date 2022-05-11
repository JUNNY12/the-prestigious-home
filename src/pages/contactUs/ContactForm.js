import { Form, Button, FloatingLabel } from "react-bootstrap";


const ContactForm = () => {
    return(
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label className="fw-bold">Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                
                <Form.Group  className="mb-3">
                    <Form.Control as="textarea" placeholder="Make your Reservation Now or Message Us" />
                </Form.Group>
              
                <Button type="submit" className="btnSend w-100 fw-bold">
                    Send Now
                </Button>   
            </Form>
        </div>
    )
}


export default ContactForm