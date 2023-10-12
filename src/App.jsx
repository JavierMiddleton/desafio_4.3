import { useState } from "react";
import Alert from "./assets/Alert";
import Formulario from "./assets/Formulario";
import React from "react";
import "./App.css";
import Listado from "./assets/Listado";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <>
      <div className="main-container">
        <div className="list-h1-container">
          <h1>Lista de colaboradores</h1>
          <Listado />
        </div>
        <div className="form-alert-container">
          <Formulario errorAlert={setError} successAlert={setSuccess} />
          <Alert errorAlert={error} successAlert={success} />
        </div>
      </div>
    </>
  );
}

export default App;
