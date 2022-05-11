import { Container, Row, Col } from "react-bootstrap"
import "./Section_1.css"
import image1 from "./assets/Image 1.jpeg"
import image2 from "./assets/image 2.jpeg"
import image3 from "./assets/image 3.jpeg"

const Section_1 = () => {
    return(
        <div className="mt-5 mb-4">
            <Container >
                <div className="sectionContainer">
                <div>
                   <div className="imageContainer mb-4">
                        <img src={image2} />
                   </div>
                </div>

                <div>
                   <div className="imageContainer mb-4">
                        <img src={image1} />
                   </div>
                </div>

                <div>
                   <div className="mb-3">
                    <h1>Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        ute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur
                    </p>
                   </div>
                </div>

                </div>
            </Container>
        </div>
    )
}

export default Section_1