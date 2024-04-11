"use client";
import React,{ useEffect, useState,useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Modal, Nav, Navbar} from "react-bootstrap";
import Head from 'next/head';
import dynamic from 'next/dynamic'
// import { QrScanner } from '@yudiel/react-qr-scanner';
import QrScanner from "qr-scanner";


function FluxControlPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);


  useEffect(() => {
    // Exemplo de código dentro de useEffect que só deve ser executado no cliente
    setShowPlayer(true);
  }, []); // O

  const registerQRCodeReaded = (rst) => {
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

  if(!showPlayer) return (<p>Carregando...</p>);
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
      {/* <DynamicQrScanner
            onResult={(text, result) => registerQRCodeReaded(text, result)}
            onError={(error) => console.log(error?.message)}
        /> */}
        <QrReader
        onResult={(result) => registerQRCodeReaded(result)}
        ></QrReader>
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

const QrReader = ({onResult}) => {
  // QR States
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);

  // Result
  const [scannedResult, setScannedResult] = useState("");

  // Success
  const onScanSuccess = (result) => {
    // 🖨 Print the "result" to browser console.
    console.log(result);
    onResult(result);
    console.log("TO passando aqui dentro.");
    // ✅ Handle success.
    // 😎 You can do whatever you want with the scanned result.
    setScannedResult(result?.data);
  };

  // Fail
  const onScanFail = (err) => {
    // 🖨 Print the "err" to browser console.
    console.log("oi");
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      scanner.current = new QrScanner(videoEl?.current, onResult, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined,
      });

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  // ❌ If "camera" is not allowed in browser permissions, show an alert.
  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  return (
    <div className="qr-reader">
      {/* QR */}
      <video ref={videoEl}></video>
      <div ref={qrBoxEl} className="qr-box">
        <img
          // src={QrFrame}
          alt="Qr Frame"
          width={256}
          height={256}
          className="qr-frame"
        />
      </div>

      {/* Show Data Result if scan is success */}
      {scannedResult && (
        <p
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 99999,
            color: "white",
          }}
        >
          Scanned Result: {scannedResult}
        </p>
      )}
    </div>
  );
};