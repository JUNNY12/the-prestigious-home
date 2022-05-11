import {Carousel} from "react-bootstrap"
import "./Banner.css"
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3a.jpg"
import image4 from "./assets/lifstyle5.jpg"
import image5 from "./assets/image-4.jpg"

const Banner = () => {

    return(
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="image d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Excellent courtesy</h3>
                    <a href="/contactUs">
                        <button className="btnBook p-2 mt-4">Book Now</button>
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="image d-block w-100"
                    src={image2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Unforgettable Adventures</h3>
                    <a href="/contactUs">
                        <button className="btnBook p-2 mt-4">Book Now</button>
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="image d-block w-100"
                    src={image4}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Delectable Cuisine</h3>
                    <a href="/contactUs">
                        <button className="btnBook p-2 mt-4">Book Now</button>
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="image d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Cool Relaxation View</h3>
                    <a href="/contactUs">
                        <button className="btnBook p-2 mt-4">Book Now</button>
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="image d-block w-100"
                    src={image5}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Comfortable and Affordable Rooms</h3>
                    <a href="/contactUs">
                        <button className="btnBook p-2 mt-4">Book Now</button>
                    </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner