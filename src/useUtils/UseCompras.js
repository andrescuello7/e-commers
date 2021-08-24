import axios from "axios";
import { Spinner, Button, Modal, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const UseCompras = () => {
  //States and Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //UseStates
  const token = localStorage.getItem("token");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ComprasUser()
  }, [])

  //Consulta de Publicaiones
  const ComprasUser = async (e) => {
    try {
      const headers = { "x-auth-token": token };
      const { data } = await axios.get("auth", { headers });
      setProductos(data.usuario.compras);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  //Aqui se hacemos el map de todos las usuarios
  const MapCompras =
    (productos.length === 0 && (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )) ||
    productos.map((data, i) => (
      <tr>
        <td>{i}</td>
        <td>{data.titulo}</td>
        <td>{data.precio}</td>
        <td className="d-flex justify-content-evenly">
          <Button variant="outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </Button>
          <Button variant="outline-success" onClick={handleShow}>
            Comprar
          </Button>
        </td>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Alert variant="success">
              Compra finalizada con exito!
            </Alert>
          </Modal.Body>
        </Modal>
      </tr>
    ));
  return {
    MapCompras,
    productos
  };
};
export default UseCompras;