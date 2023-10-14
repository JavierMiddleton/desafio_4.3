import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca un colaborador..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Buscador;
