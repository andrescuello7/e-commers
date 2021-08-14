//import UseHome from "../../UseForm/UseHome";
//import Portada from "../../components/Portada/Portada";
import { Table } from "react-bootstrap";

const TableVentas = () => {
    return (
        <div className="home mt-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ventas</th>
                        <th>Usuario</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};
export default TableVentas;
