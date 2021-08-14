//React librerias
import { Table } from "react-bootstrap";
//Routes
import UseAdmin from "../../../useUtils/UseAdmin";

const TableUsers = () => {
    //States and Hooks
    const { MapUsuarios } = UseAdmin();
    return (
        <div className="home mt-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuarios</th>
                        <th>Email</th>
                        <th>Opcions</th>
                    </tr>
                </thead>
                <tbody>{MapUsuarios}</tbody>
            </Table>
        </div>
    );
};
export default TableUsers;
