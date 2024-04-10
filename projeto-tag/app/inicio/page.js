"use client"
import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
const { setCookie, getCookie, removeCookie } = require('../Utils/Cookies');
import InicioResponsavelPage from './InicioResponsavelPage';
const InicioPage = () => {
    const [access, setAccess] = useState(null);

    useEffect(() => {
      const accessCookie = getCookie('access-key');
      setAccess(accessCookie);
    }, []);
  
    if (access === null) {
      // Renderizar um componente de "loading" enquanto a verificação do cookie está em andamento
      return <p>Carregando...</p>;
    }
  
    return (
      <div>
        {access === "1" ? (
          <InicioResponsavelPage />
        ) : (
          <p>O usuário não está logado.</p>
        )}
      </div>
    );
        };
export default InicioPage;
