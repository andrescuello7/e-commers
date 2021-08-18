import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
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
            <Navbar.Brand as={Link} to="/" exact className="NavbarTitulo m-2">e-commers</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {userAuth.state && <Nav.Link as={Link} to="/admin" className="NavbarPages">Admin</Nav.Link>}
              <Nav.Link as={Link} to="/productos" className="NavbarPages">Productos</Nav.Link>
              {token && <Nav.Link as={Link} to="/login" onClick={handleLogOut} className="NavbarPages">Cerrar session</Nav.Link>}
            </Nav>
            <Navbar id="basic-navbar-nav">
              <Nav className="me-auto">
                {!token && <Nav.Link as={Link} to="/login" className="NavbarPages">Login</Nav.Link>}
                {!token && <Nav.Link as={Link} to="/register" className="NavbarPages">Register</Nav.Link>}
              </Nav>
              {token &&
                <Nav className="w-100 d-flex justify-content-center p-2 btn btn-outline-primary" as={Link} to="/compras">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Nav>}
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarPage;
