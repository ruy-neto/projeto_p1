'use client'
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Container, Nav, Navbar} from "react-bootstrap";
import Lista from "../componentes/Lista";
Lista
function RegistroFluxoPage() {
  const router = useRouter();
  const goToInicio = () =>{router.push("/inicio")};
  const goToControle = () =>{router.push("/controlefluxo")};
  const goToRegistro = () =>{router.push("/registrofluxo")};
  return (
      <div>
        <Head>
        <title>Registro do Fluxo</title>
      </Head>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Registro de fluxo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link onClick={goToInicio}>Inicio</Nav.Link>
                <Nav.Link onClick={goToControle}>Controle de Fluxo</Nav.Link>
                <Nav.Link onClick={goToRegistro}>Registro de fluxo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Lista></Lista>
        </Container>
      </div>
    );
}

export default RegistroFluxoPage;