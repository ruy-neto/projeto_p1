"use client"
import React from 'react';
import { Container, Form, Button ,Row, Col, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';
import Lista from '../componentes/Lista';


const InicioResponsavelPage = () => {
    const [selectedDate, setSelectedDate] = useState('');
    let referencia = new Date();
      return (<>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Lista de Checagem</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row className="bg-primary text-white p-4">
            <Col xs={12} className="text-center">
              <h1>Selecione uma Data</h1>
              <Form.Control
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="mt-3"
              />
            </Col>
          </Row>
          <Row>
            <Lista/>
          </Row>
        </Container>
      </>
      );
};

export default InicioResponsavelPage;