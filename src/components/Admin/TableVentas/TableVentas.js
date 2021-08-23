//React librerias
import { Modal, Form, Button, Alert } from "react-bootstrap";
//Routes
import UseProductos from "../../../useUtils/UseProductos";

const TableVentas = () => {
    //States and Hooks
    const { HandleSubmit, HandleChange, handleClose, alert, show } = UseProductos();
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="formProducto">
                <Form>
                    {alert === true && <Alert variant="danger">
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
                    <div className="d-flex justify-content-between">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control name="photo" onChange={(e) => HandleChange(e)} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                    </div>
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
