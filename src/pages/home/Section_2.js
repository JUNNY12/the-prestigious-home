import { Container, Row, Col } from "react-bootstrap"
import "./Section_2.css"
import lifestyle1 from "./assets/lifestyle1.jpg"
import lifestyle2 from "./assets/lifestyle2.jpg"
import lifestyle3 from "./assets/lifestyle3.jpg"




const Section_2 = () => {
    return (
        <div>
            <div className="text-center mb-3">
                <h2>Unending Experience</h2>
            </div>
            <Container>
                <div  className="sectionContainer2">
                    <div>
                        <div className="imageWrapper mb-3">
                            <img src={lifestyle1}/>
                        </div>
                    </div>

                    <div>
                        <div className="imageWrapper short mb-3">
                            <img src={lifestyle2}/>
                        </div>

                        <div className="imageWrapper short mb-3">
                            <img src={lifestyle3}/>
                        </div>

                    </div>

                    <div>
                        <div>
                            <p className="fw-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris et dapibus augue, id rutrum dui. Ut viverra non eros 
                            vel accumsan. Nam nec tellus libero. Pellentesque iaculis sed 
                            turpis eu sollicitudin. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus. In sed nunc quam. Cras lacinia nisi 
                            in velit iaculis tempus. Cras est libero, scelerisque sed neque id,
                            placerat elementum est. Proin interdum congue ipsum id rhoncus.
                            </p>

                            <p>
                            Curabitur sed imperdiet tortor. Mauris laoreet tristique magna,
                            nec congue urna fermentum in. Curabitur blandit sollicitudin lobortis.
                            Mauris mollis tristique urna sit amet accumsan. Maecenas semper
                            nibh eu facilisis posuere. Proin sit amet lectus vitae urna vulputate eleifend.
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Section_2