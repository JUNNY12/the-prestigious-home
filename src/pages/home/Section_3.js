import { Container, Row, Col, Form, InputGroup, FormControl} from "react-bootstrap"
import "./Section_3.css"
import lifestyle1 from "./assets/lifestyle1.jpg"
import lifestyle2 from "./assets/lifestyle2.jpg"
import lifestyle3 from "./assets/lifestyle3.jpg"
import lifestyle4 from "./assets/lifestyle4.jpg"
import lifestyle5 from "./assets/lifstyle5.jpg"
import lifestyle6 from "./assets/lifestyle6.jpg"



const Section_3 = () => {
    return(
        <div className="mt-5">
            <div className="text-center mb-3 fw-bold">
                <h2>Conducive Environments</h2>
            </div>
            <Container>
                <div className="sectionContainer3">
                    <div>
                        <div className="lifeStyleWrapper mb-3">
                            <img  src={lifestyle1} />
                        </div>
                    </div>

                    <div>
                        <div className="lifeStyleWrapper mb-3">
                            <img  src={lifestyle2} />
                        </div>
                    </div>

                    <div>
                        <div className="lifeStyleWrapper mb-3">
                            <img  src={lifestyle3} />
                        </div>
                    </div>

                    <div>
                        <div className="lifeStyleWrapper mb-3">
                            <img  src={lifestyle4} />
                        </div>
                    </div>

                    <div>
                        <div className="lifeStyleWrapper mb-3">
                            <img  src={lifestyle5} />
                        </div>
                    </div>

                    <div>
                        <div className="lifeStyleWrapper mb-3">
                            <img  src={lifestyle6} />
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Section_3