//React librerias
import { Nav } from "react-bootstrap";
import { useState } from "react";
//Routes
import ProductosDisponibles from "../../components/Compras/Productos/Productos"
const Productos = () => {
  return (
    <div className="home">
      <ProductosDisponibles/>
    </div>
  );
};
export default Productos;
