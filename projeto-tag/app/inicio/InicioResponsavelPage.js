"use client"
import React from 'react';
import { Container, Form, Button ,Row, Col, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';

const InicioResponsavelPage = () => {
    const [selectedDate, setSelectedDate] = useState('');
    let referencia = new Date();
    const lista = [
        {"dia": referencia,"tipo":"0", "realizador": "André"},
        {"dia": referencia,"tipo":"1", "realizador": "André"},
        {"dia": referencia,"tipo":"0", "realizador": "André"},
        {"dia": referencia,"tipo":"1", "realizador": "André"},
    ]
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };

    const formatarHoraMinuto = (datala) => {
        const hora = datala.getHours().toString().padStart(2, '0');
        const minuto = datala.getMinutes().toString().padStart(2, '0');
        return `${hora}:${minuto}`;
      };

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
            <Col xs={12}>
              <ul className="list-group">
                {lista.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.tipo === '0' ? (
                      <span className="badge bg-success text-white">Check-in </span>
                    ) : (
                      <span className="badge bg-warning text-dark">Checkout </span>
                    )}
                    <span> {formatarHoraMinuto(item.dia)} </span>
                    Guarda: {item.realizador}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </>
      );
};

export default InicioResponsavelPage;