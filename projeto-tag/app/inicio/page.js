"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
const { getCookie} = require('../Utils/Cookies');
import InicioResponsavelPage from './InicioResponsavelPage';
import InicioTagueiroPage from './InicioTagueiroPage';
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

    if (access === "1") {
        console.log("Accesso 1");
        return (<InicioResponsavelPage />);
    }
    if (access === "2") {
        console.log("Accesso 2");
        return (<InicioTagueiroPage/>);
    }
        };
export default InicioPage;
