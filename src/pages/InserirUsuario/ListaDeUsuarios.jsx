import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import tCadastrarInfo from '../tCadastrarInfo';

function InserirUsuario() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
      
        fetch("https://localhost:44396/api/cuidadores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(usuarios)
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.log(error);
          alert("Erro ao inserir usuário");
        });
      }, []);
}

export default InserirUsuario;

