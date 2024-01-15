import { Container } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Foter";
import NosotrosInfo from "../Components/NosotrosInfo";
import ImgNosotros from "../Components/ImgNosotros";

function SobreNosotros(){




    return(

        <Container fluid className="d-flex flex-column justify-content-end">

        <Container fluid className="bg-dark mb-4">
            <NavBar/>
        </Container>

    
        <NosotrosInfo/>
        <ImgNosotros/>
        <Footer/>

        </Container>




    )
}



export default SobreNosotros;