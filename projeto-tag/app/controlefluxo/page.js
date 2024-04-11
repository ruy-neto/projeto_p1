'use client';

import { useRouter } from 'next/navigation';

import { Button, Container, Modal, Nav, Navbar} from "react-bootstrap";
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from "react";
import Head from 'next/head';

function FluxControlPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const registerQRCodeReaded = (msg, rst) => {
    handleModalOpen();
  }

  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }

  const didConfirmed = () => {
    setShowModal(false);
    router.push('/registrofluxo');
  }

  return  (
    <div>
      <Head>
        <title>Controle de Fluxo</title>
      </Head>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Controle de Fluxo</Navbar.Brand>
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
      <Scanner
            onResult={(text, result) => registerQRCodeReaded(text, result)}
            onError={(error) => console.log(error?.message)}
        />
        <CustomModal show={showModal} onHide={handleModalClose} onConfirm={didConfirmed} />
      </Container>
    </div>
  );
}

export default FluxControlPage;

const CustomModal = ({ show, onHide,onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>QRCode lido com sucesso</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Aluno: Fulano de Tal</p>
        <p>Registro de entrada/saída feita com sucesso.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" 
        onClick={onConfirm}
        >
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}