'use client'
import { Container, Nav, Navbar} from "react-bootstrap";

function FluxControlPage() {
  return  (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Controle de Fluxo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="./inicio">Inicio</Nav.Link>
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
    // return (
    //     <>
    //      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    //          <Container>
    //          <Navbar.Brand>Controle de Fluxo</Navbar.Brand>
    //            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //            <Navbar.Collapse id="responsive-navbar-nav">
    //              <Nav className="me-auto">
    //                <Nav.Link href="./inicio">Inicio</Nav.Link>
    //                <Nav.Link href="#pricing">Registro de fluxo</Nav.Link>
    //              </Nav>
    //            </Navbar.Collapse>
    //          </Container>
    //        </Navbar>
    //        <Container>
    //          <p>
    //            Escolha uma das opções no Menu.
    //          </p>
    //        </Container>
    //     </>
    //   );
}

export default FluxControlPage;