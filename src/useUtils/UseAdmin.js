import axios from "axios";
import { Spinner, Button, Card, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

const UseAdmin = () => {
  //States de modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //UseStates
  const token = localStorage.getItem("token");
  const [productos, setProductos] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [userAuth, setUserAuth] = useState({});

  //Id de user and cards
  const [id, setId] = useState("");
  const [idPhotoCard, setIdPhotoCard] = useState("");
  const [idCard, setIdCard] = useState("");

  useEffect(() => {
    Publicacion()
    Usuarios()
  }, [productos])

  useEffect(() => {
    AuthUsuarios()
  }, [])

  useEffect(() => {
    if (id.length !== 0) {
      Delete()
    }
    if (idCard.length !== 0) {
      IdPublicacion()
    }
  }, [id, idCard])

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

  //Consulta Get de Usuarios
  const AuthUsuarios = async (e) => {
    try {
      const headers = { "x-auth-token": token };
      const { data } = await axios.get("auth", { headers });
      setUserAuth(data.usuario);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

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

  //Consulta de Publicaiones
  const IdPublicacion = async (e) => {
    const headers = { "x-auth-token": token };
    try {
      const { data } = await axios.get(`post/usuario/${idCard}`);
      const datos = {
        "compras": {
          "contenido": data[0].contenido,
          "photo": data[0].photo,
          "precio": data[0].precio,
          "titulo": data[0].titulo
        }
      }
      if (datos !== 0) {
        await axios.post(`/user/compra/${userAuth._id}`, datos, { headers });
        localStorage.setItem("carrito", true);
      }
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  //Funcion de Eliminar Publicacion
  const Delete = async () => {
    try {
      const headers = { "x-auth-token": token };
      await axios.delete(`post/${id}`, { headers });
    } catch (error) {
      console.log("Error en eliminar datos");
    }
  };

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
        <td className="d-flex justify-content-evenly">
          <Button variant="outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </Button>
          <Button variant="primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16">
              <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
              <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </Button>
          <Button variant="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
              <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
            </svg>
          </Button>
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
        <td className="d-flex justify-content-evenly">
          <Button variant="outline-danger" onClick={() => setId(data._id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </Button>
          <Button variant="primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16">
              <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
              <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </Button>
          <Button variant="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
              <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
            </svg>
          </Button>
        </td>
      </tr>
    ));


  //Aqui se ven los productos
  const MapProductosEnHome =
    (productos.length === 0 && (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )) ||
    productos.map((data, i) => (
      <div key={i}>
        <div>
          <div className="cardProducto mt-2" onClick={() => setIdPhotoCard(data._id)}>
            <Card.Img className="cardProductoPhoto" onClick={handleShow} variant="top" src={data.photo} />
          </div>
        </div>
        <div>
          {idPhotoCard === data._id &&
            <Modal
              show={show}
              onHide={handleClose}
            >
              <div className="w-100 d-flex">
                <div className="d-flex align-items-center">
                  <Card.Img className="cardProductoPhotoModal"
                    onClick={handleShow}
                    variant="top"
                    src={data.photo} />
                </div>
                <div className="text-left m-2">
                  <h4 className="m-2"><b>{data.titulo}</b></h4>
                  <p>{data.contenido}</p>
                  <div className="d-flex"><p>Precio:{' '}</p><p className="text-success">${data.precio}</p></div>
                </div>
              </div>
              <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="success" onClick={() => setIdCard(data._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Button>
              </Modal.Footer>
            </Modal>
          }
        </div>
      </div>
    ));
  return {
    MapProductosEnHome,
    MapProductos,
    MapUsuarios,
    usuario,
    userAuth,
    productos
  };
};
export default UseAdmin;