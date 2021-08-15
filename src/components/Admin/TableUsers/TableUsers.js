//React librerias
import { Table } from "react-bootstrap";
//Routes
import UseAdmin from "../../../useUtils/UseAdmin";

const TableUsers = () => {
    //States and Hooks
    const { MapUsuarios } = UseAdmin();
    return (
        <div className="home">
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Nº</th>
                        <th>Usuarios</th>
                        <th>Opcions</th>
                    </tr>
                </thead>
                <tbody className="text-center">{MapUsuarios}</tbody>
            </Table>
        </div>
    );
};
export default TableUsers;
