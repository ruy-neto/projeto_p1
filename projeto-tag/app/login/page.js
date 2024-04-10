"use client"
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com os dados do formulário (autenticação, validação, etc.)
    console.log('Formulário enviado!');
  };


  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control required />
        </Form.Group>
        <p></p>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <p></p>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;