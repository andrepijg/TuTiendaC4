import React from "react";
import {
  Container,
  Dropdown,
  Button,
  DropdownButton,
  Nav,
  Navbar,
  Row,
  NavDropdown,
} from "react-bootstrap";
import "./NavBarTienda.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
//import { NavLink } from "react-router-dom";


const NavBarTienda = () => {
  const categorias = [
    {
      categoria: "FRUTAS",
    },
    {
      categoria: "VERDURAS",
    },
    {
      categoria: "CARNES",
    },
  ];
  const guardarLocalstorage = (categoria) => {
    localStorage.setItem("tipo", categoria);
  };
  return (
    <Navbar bg="success" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg"
            width="200"
            alt="tu-tienda"
          />
        </Navbar.Brand>
        <NavbarToggle sria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link mx-2" >INICIO</Nav.Link>
            <NavDropdown title="PRODUCTOS" 
            id="navbarScrollingDropdown">{categorias.map((categoria)=>
            (
              <NavDropdown.Item href="/productos" onClick={() => guardarLocalstorage(categoria.categoria)} >{categoria.categoria}</NavDropdown.Item> 
            ))}
              
            </NavDropdown>
            <Nav.Link href="/tiendas" className="nav-link mx-2">TIENDAS</Nav.Link>
            <Nav.Link href="/blog" className="nav-link mx-2">BLOG</Nav.Link>
          </Nav>

          <Button align="end" id="dropdown-menu-align-end" href="/login" title="LOGIN">LOGIN</Button>

          <DropdownButton align="end" id="dropdown-menu-align-end" title="USUARIO">
            <Dropdown.Header id="dropdown-header">
              <Row>
                <FontAwesomeIcon icon={faUserCircle} />
              </Row>
              <Row>Usuario</Row>
              <Dropdown.Divider />
            </Dropdown.Header>
            <Dropdown.Item id="dropdown-item" href="#">Cerrar Sesion</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarTienda;
