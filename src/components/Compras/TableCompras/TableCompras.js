//React librerias
import { Table, Modal, Alert } from "react-bootstrap";
import { useState } from "react";
//Routes
import UseCompras from "../../../useUtils/UseCompras";

const TableCompras = () => {
    //States and Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //States and Hooks
    const { MapCompras } = UseCompras();
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Nº</th>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {MapCompras}
                </tbody>
            </Table>
            <div className="m-5">
                <button className="text-light btn btn-info w-100" onClick={handleShow}>Finalizar Comprar</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <Alert variant="success">
                            Compra finalizada con exito!
                        </Alert>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};
export default TableCompras;
