//React librerias
import { Nav } from "react-bootstrap";
import { useState } from "react";
//Routes
import TableCompras from "../../components/Compras/TableCompras/TableCompras"
const Compras = () => {
  return (
    <div className="home">
      <TableCompras/>
    </div>
  );
};
export default Compras;
