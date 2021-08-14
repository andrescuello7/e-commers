import axios from "axios";
import { Spinner, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const UseAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [usuario, setUsuario] = useState([]);

  //Consulta de Publicaiones
  const Publicacion = async (e) => {
    try {
      const { data } = await axios.get("post");
      setProductos(data);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  //Consulta de Usuarios
  const Usuarios = async (e) => {
    try {
      const { data } = await axios.get("user");
      setUsuario(data);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    Publicacion()
    Usuarios()
  }, [])

  //Aqui se hacemos el map de todos las usuarios
  const MapUsuarios =
    (usuario.length === 0 && (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )) ||
    usuario.map((data, i) => (
      <tr>
        <td>{i}</td>
        <td>{data.user}</td>
        <td>{data.email}</td>
        <td className="d-flex justify-content-evenly">
          <Button variant="danger">Eliminar</Button>
          <Button variant="primary">Date</Button>
          <Button variant="success">Update</Button>
        </td>
      </tr>
    ));
    
    //Aqui se hacemos el map de todos las productos
    const MapProductos =
      (productos.length === 0 && (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )) ||
      productos.map((data, i) => (
        <tr>
          <td>{i}</td>
          <td>{data.titulo}</td>
          <td>{data.contenido}</td>
          <td className="d-flex justify-content-evenly">
            <Button variant="danger">Eliminar</Button>
            <Button variant="primary">Date</Button>
            <Button variant="success">Update</Button>
          </td>
        </tr>
      ));
  return {
    MapUsuarios,
    MapProductos
  };
};
export default UseAdmin;