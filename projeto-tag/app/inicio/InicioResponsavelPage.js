"use client"
import React from 'react';
import { Container, Form, Button ,Row, Col, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';
import Lista from '../componentes/Lista';
import Head from 'next/head';


const InicioResponsavelPage = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };
    let referencia = new Date();
      return (<>
      <Head>
        <title>Inicio</title>
      </Head>
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