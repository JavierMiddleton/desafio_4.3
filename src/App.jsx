import { useState, useEffect } from "react";
import Alert from "./assets/Alert";
import Formulario from "./assets/Formulario";
import React from "react";
import "./App.css";
import Listado from "./assets/Listado";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Buscador from "./assets/Buscador";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);

  const handleListUpdate = (newList) => {
    setColaboradores(newList);
    setFilteredColaboradores(newList);
  };

  const handleSearch = (searchTerm) => {
    const filtered = colaboradores.filter((colaborador) => {
      const searchTermLower = searchTerm.toLowerCase();
      return Object.values(colaborador).some((field) =>
        field.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredColaboradores(filtered);
  };

  return (
    <>
      <div className="main-container">
        <div className="list-h1-container">
          <h1>Lista de colaboradores</h1>
          <Buscador onSearch={handleSearch} />
          <Listado colaboradores={filteredColaboradores} />
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
