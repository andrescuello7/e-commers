import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
//Routes
import UseAdmin from "../../useUtils/UseAdmin";

const NavbarPage = () => {
  //States and Hooks
  const { userAuth } = UseAdmin();

  //Hooks de Form
  const token = localStorage.getItem("token");

  //Cerrar Session
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg">
        <Container>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
            </svg>
            <Navbar.Brand as={Link} to="/" exact className="NavbarTitulo m-2">e-commers</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!token && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
              {!token && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
          {token &&
            <Dropdown>
              <Dropdown.Toggle variant="light" className="d-flex" id="dropdown-basic">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <div className="ml-5">{userAuth.user || "NameUser"}</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin">Admin</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/login" onClick={handleLogOut}>Cerrar Session</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          }
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarPage;
