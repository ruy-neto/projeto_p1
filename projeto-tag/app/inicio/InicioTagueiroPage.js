'use client'
import { useRouter } from "next/navigation";
import { Container, Nav, Navbar} from "react-bootstrap";

function InicioTagueiroPage() {
  const router = useRouter();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
             <Container>
             <Navbar.Brand>Inicio</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={() => router.push("/inicio")}>Inicio</Nav.Link>
                  <Nav.Link onClick={() => router.push("/controlefluxo")}>Controle de Fluxo</Nav.Link>
                 <Nav.Link onClick={() => router.push("/registrofluxo")}>Registro de fluxo</Nav.Link>
                </Nav>
              </Navbar.Collapse>
           </Container>
         </Navbar>
          <Container>
            <p>
              Escolha uma das opções no Menu.
            </p>
          </Container>
        </div>
      );
}

export default InicioTagueiroPage;