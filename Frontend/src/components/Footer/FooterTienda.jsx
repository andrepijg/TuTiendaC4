import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import "../styles/footer.css";

const FooterTienda = () => {
  return (
    <div className="container-footer">
      <div className="img-footer"></div>
      <footer className="text-white text-center">
        <Row className="container-row">
          <Col className="mt-3" sm={6} lg={3}>
            <img
              src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg"
              width="200"
              alt="tu-tienda"
            />
            <br />
            <br />
            <br />
            <br />
            <p>&copy; Tu Tienda Cercana. 2021</p>
          </Col>
          <Col className="mt-3" sm={6} lg={3}>
            <h4>Mapa del sitio</h4>
            <Nav className="flex-column">
              <Nav.Link className="text-white" href="/">
                Inicio
              </Nav.Link>
              <Nav.Link className="text-white" href="/productos">
                Productos
              </Nav.Link>
              <Nav.Link className="text-white" href="/tiendas">
                Tiendas
              </Nav.Link>
              <Nav.Link className="text-white" href="/blog">
                Blog
              </Nav.Link>
            </Nav>
          </Col>
          <Col className="mt-3" sm={6} lg={3}>
            <h4>Acerca de nosotros</h4>
            <p>Grupo 14 - Equipo 1</p>
          </Col>
          <Col className="mt-3" sm={6} lg={3}>
            <h4>Correos</h4>
            <p>jorgedavid23diaz@gmail.com</p>
            <p>andrepijg@gmail.com</p>
            <p>cajaramillob@gmail.com</p>
            <p>oscreymar05@gmail.com</p>
            <p>nelson.sj@hotmail.com</p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default FooterTienda;
