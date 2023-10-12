import React from "react";

const Listado = ({}) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="border-bottom-0">
          <tr>
            <th scope="col-3">Nombre</th>
            <th scope="col-4">Correo</th>
            <th scope="col-1">Edad</th>
            <th scope="col-3">Cargo</th>
            <th scope="col-1">Teléfono</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Listado;
