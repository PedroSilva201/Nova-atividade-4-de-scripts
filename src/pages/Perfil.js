import React, { useState, useContext } from "react";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { Context } from "../context/AuthContext";
//incompleto
export default function Perfil() {
  const { handlePerfil } = useContext(Context);
  const submeter = (e) => {
    e.preventDefault();
    handlePerfil(usuario.trim(), administrador.trim());
  };

  return (
    <div>
      <Cabecalho />
      <h4>Login </h4>
      <form onSubmit={submeter}>
        <div>
        <div>
          <button onClick={save}>Usuario</button>
        </div>
        <div><button onClick={reset}>Adminstrador</button></div>
        </div>
      </form>
      <Rodape />
    </div>
  );
}
