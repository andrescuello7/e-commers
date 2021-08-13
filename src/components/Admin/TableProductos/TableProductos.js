//import UseHome from "../../UseForm/UseHome";
//import Portada from "../../components/Portada/Portada";
import { Table } from "react-bootstrap";

const TableProductos = () => {
    return (
        <div className="home mt-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Productos</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};
export default TableProductos;
