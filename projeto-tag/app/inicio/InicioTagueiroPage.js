'use client'
import { Container, Nav, Navbar} from "react-bootstrap";

function InicioTagueiroPage() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
              <Navbar.Brand>Inicio</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="./controle-fluxo">Controle de Fluxo</Nav.Link>
                  <Nav.Link href="#pricing">Registro de fluxo</Nav.Link>
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