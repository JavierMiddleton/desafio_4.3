// components/Tareas.jsx
import { useState } from "react";
import { tareasIniciales } from "../TareasIniciales";
import { v4 as uuidv4 } from "uuid";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareasIniciales);
  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaTareas([
      ...listaTareas,
      { id: uuidv4(), nombre: nombreTarea, completada: false },
    ]);
  };
  //Función al escribir sobre el input del formulario
  const capturaInput = (e) => {
    setNombreTarea(e.target.value);
  };
  const completarTarea = (tarea) => {
    const nuevasTareas = [...listaTareas]; // Copiamos las tareas
    const index = nuevasTareas.findIndex((el) => el.id === tarea.id); // Buscamos la tarea a modificar en la lista
    nuevasTareas[index].completada = true;
    setListaTareas(nuevasTareas);
  };
  const eliminarTarea = (tarea) => {
    const listaFiltrada = listaTareas.filter((el) => el.id !== tarea.id);
    setListaTareas(listaFiltrada);
  };
  return (
    <>
      <div>
        <form onSubmit={enviarFormulario}>
          <input name="nombreTarea" onChange={capturaInput} />
          <button> Agregar Tarea </button>
        </form>
        <ul>
          {listaTareas.map((tarea) => (
            <li
              key={tarea.nombre}
              style={{
                textDecoration: tarea.completada ? "line-through" : "none",
              }}
            >
              {tarea.id}
              {tarea.nombre}
              {tarea.completada === false ? (
                <button onClick={() => completarTarea(tarea)}>Completar</button>
              ) : (
                ""
              )}
              <button onClick={() => eliminarTarea(tarea)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Tareas;
