import { useState } from "react";
import Alert from "./assets/Alert";
import Formulario from "./assets/Formulario";
import React from "react";
import "./App.css";
import Listado from "./assets/Listado";
import { BaseColaboradores } from "./assets/BaseColaboradores";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const handleListUpdate = (newList) => {
    setColaboradores(newList);
  };

  return (
    <>
      <div className="main-container">
        <div className="list-h1-container">
          <h1>Lista de colaboradores</h1>
          <Listado colaboradores={colaboradores} />
        </div>
        <div className="form-alert-container">
          <Formulario
            errorAlert={setError}
            successAlert={setSuccess}
            listHandle={handleListUpdate}
          />
          <Alert errorAlert={error} successAlert={success} />
        </div>
      </div>
    </>
  );
}

export default App;
