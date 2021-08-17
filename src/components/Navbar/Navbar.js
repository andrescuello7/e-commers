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
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
            </svg>
            <Navbar.Brand as={Link} to="/" exact className="NavbarTitulo m-2">e-commers</Navbar.Brand>
          </div>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              {!token && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
              {!token && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
            </Nav>
            <div className="w-100 d-flex justify-content-between">
              {token &&
                <Button className="btn btn-primary m-2" as={Link} to="/compras">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Button>}
              {token &&
                <Dropdown className="m-2">
                  <Dropdown.Toggle variant="outline-dark" className="d-flex" id="dropdown-basic">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>
                    <div className="ml-5">{userAuth.user || "NameUser"}</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                    {userAuth.state && <Dropdown.Item as={Link} to="/admin">Admin</Dropdown.Item>}
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/login" onClick={handleLogOut}>Cerrar Session</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>}
            </div>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarPage;
