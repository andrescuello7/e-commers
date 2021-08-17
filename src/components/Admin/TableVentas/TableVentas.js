//React librerias
import axios from "axios";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const TableVentas = () => {
    //Inicio de session States
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [textFormProducto, setTextFormProducto] = useState({});
    const token = localStorage.getItem("token");

    //Vista de credenciales
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...textFormProducto, [name]: value };
        setTextFormProducto(changedInput);
    };

    //Iniciar Session
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const headers = { "x-auth-token": token };
        try {
            await axios.post("post", textFormProducto,
                { headers });
            handleShow()
        } catch (error) {
            console.log(error);
            setAlert(true)
        }
    };
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="formProducto">
                <Form>
                    {alert === true &&<Alert variant="danger">
                        No se subio la publicacion!, intente nuevamente
                    </Alert>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control name="titulo" onChange={(e) => HandleChange(e)} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripcion</Form.Label>
                        <textarea className="form-control" name="contenido" onChange={(e) => HandleChange(e)} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control name="photo" onChange={(e) => HandleChange(e)} type="text" />
                    </Form.Group>
                    <Button variant="primary" className="w-100" onClick={HandleSubmit} type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Body>Se subio la publicacion con exito!!</Modal.Body>
                    </Modal.Header>
                </Modal>
            </div>
        </div>
    );
};
export default TableVentas;
