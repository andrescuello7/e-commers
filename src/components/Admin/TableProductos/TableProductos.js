//React librerias
import { Table } from "react-bootstrap";
//Routes
import UseAdmin from "../../../useUtils/UseAdmin";

const TableProductos = () => {
    //States and Hooks
    const { MapProductos } = UseAdmin();
    return (
        <div className="home">
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Nº</th>
                        <th>Productos</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {MapProductos}
                </tbody>
            </Table>
        </div>
    );
};
export default TableProductos;
