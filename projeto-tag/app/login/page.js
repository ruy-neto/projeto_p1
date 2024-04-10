"use client"
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
const { setCookie, getCookie, removeCookie } = require('../Utils/Cookies');

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''
  });

  const login = () => {
    window.usuario = formData.usuario;
    console.log("oi1");
    if (formData.usuario == formData.senha == "1") {
      console.log("oi2");
      setCookie('access-key', '1', { expires: 7 });
      abrirURL();
    }

    if (formData.usuario === formData.senha === 2) {
      setCookie('access-key', '2', { expires: 7 });
      abrirURL();
    }
  }

  const abrirURL = () => {

    // Obtém o URL base do domínio
    const baseUrl = window.location.origin;

    // Concatena o caminho relativo ao URL base
    const relativeUrl = '/inicio';

    // Abre a URL relativa em uma nova aba
    window.location.href = baseUrl + relativeUrl;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (<div>
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control 
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          required />
        </Form.Group>
        <p></p>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          type="password" required />
        </Form.Group>
        <p></p>
        <Button variant="primary" onClick={login}>
          Entrar
        </Button>
        <p> Usuário 1-1 = Responsavel </p>
        <p> Usuário 2-2 = Responsavel pelo Registro </p>
      </Form>
    </Container>
  </div>
  );
};

export default LoginScreen;