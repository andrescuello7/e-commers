//React librerias
import { Nav } from "react-bootstrap";
import { useState } from "react";
//Routes
import TableUsers from "../../components/Admin/TableUsers/TableUsers";
import TableProductos from "../../components/Admin/TableProductos/TableProductos";
import TableVentas from "../../components/Admin/TableVentas/TableVentas";

const Admin = () => {
  //UseStates
  const [navAdmin, setNavAdmin] = useState("TableUsers")
  return (
    <div className="home mt-2">
      <div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <div className="w-100 d-flex justify-content-evenly">
            <Nav.Item>
              <Nav.Link className="text-dark" onClick={() => setNavAdmin("TableUsers")}>Usuarios</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" onClick={() => setNavAdmin("TableProductos")}>Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" onClick={() => setNavAdmin("TableVentas")}>Ventas</Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </div>
      <div className="">
        {navAdmin === "TableUsers" && <TableUsers />}
        {navAdmin === "TableProductos" && <TableProductos />}
        {navAdmin === "TableVentas" && <TableVentas />}
      </div>
    </div>
  );
};
export default Admin;
