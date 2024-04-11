"use client"

import React from 'react';
import { Container, Form, Button ,Row, Col, Navbar, Nav} from 'react-bootstrap';

const Lista = () => {
  const referencia = new Date();
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


    return (<Col xs={12}>
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
      </Col>);
}

export default Lista;