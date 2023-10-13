import { useState, useEffect } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ errorAlert, successAlert, listHandle }) => {
  //useState consts
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [work, setWork] = useState("");
  const [phone, setPhone] = useState("");
  const [userList, setUserList] = useState(BaseColaboradores);

  // Función de Efecto que mire los cambios en userList. Así se agrega el colaborador con solo un click en submit
  useEffect(() => {
    listHandle(userList);
  }, [userList]);
  // Validate Input function
  const validateInput = (e) => {
    e.preventDefault();

    //Validation if
    if (
      name === "" ||
      email === "" ||
      age === "" ||
      work === "" ||
      phone === ""
    ) {
      errorAlert("Rellena todos los campos");
      successAlert("");
    } else {
      successAlert("¡Logrado!");
      errorAlert("");
      setUserList((prevUserList) => [
        ...prevUserList,
        {
          id: uuidv4(),
          nombre: name,
          correo: email,
          edad: age,
          cargo: work,
          telefono: phone,
        },
      ]);
    }
  };

  return (
    <>
      <div className="form-container">
        <h2>Agregar colaborador</h2>
        <form className="form-css" onSubmit={validateInput}>
          <input
            type="text"
            placeholder="Nombre del colaborador"
            name="username"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mail del colaborador"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Edad del colaborador"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cargo del colaborador"
            name="work"
            onChange={(e) => setWork(e.target.value)}
          />
          <input
            type="text"
            placeholder="Teléfono del colaborador"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="btn btn-primary mt-3" type="submit">
            Agregar colaborador
          </button>
        </form>
      </div>
    </>
  );
};
export default Formulario;
