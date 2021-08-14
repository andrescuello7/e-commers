//React librerias
import { Table } from "react-bootstrap";
//Routes
import UseAdmin from "../../../useUtils/UseAdmin";

const TableProductos = () => {
    //States and Hooks
    const { MapProductos } = UseAdmin();
    return (
        <div className="home mt-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Productos</th>
                        <th>Descripcion</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {MapProductos}
                </tbody>
            </Table>
        </div>
    );
};
export default TableProductos;
