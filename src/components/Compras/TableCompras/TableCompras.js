//React librerias
import { Table } from "react-bootstrap";
//Routes
import UseCompras from "../../../useUtils/UseCompras";

const TableCompras = () => {
    //States and Hooks
    const { MapCompras } = UseCompras();
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Nº</th>
                        <th>Productos</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {MapCompras}
                </tbody>
            </Table>
        </div>
    );
};
export default TableCompras;
