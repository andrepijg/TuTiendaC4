import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import {obtenerProductos} from '../../services/index.js';
// import fruta from "../../assets/mango.png";
import "./CardPagProduct.css";

const CardPagProduct = (props) => {
  let tipoAlimento = "";
  if (localStorage.getItem("tipo")) {
    tipoAlimento = localStorage.getItem("tipo");
  }

  const [product, setProduct] = useState([]);


  useEffect(() => {
    async function cargarProductos() {
        setProduct(await obtenerProductos())
    }
    cargarProductos();
}, [])

  // useEffect(() => {
  //   setProduct(product);
  //   console.log(obtenerProductos)
  // }, []);


const filtrarAlimentos = product.filter((alimento) => {
    return alimento.tipo_producto
      .toLowerCase()
      .includes(tipoAlimento.toLowerCase());
  });
  return (
    <Container>
      <h1 className="text-center bg-alert my-5">PRODUCTOS</h1>
      <div className="search">
        {/* <input type="text" value={search} onChange={handleSearch} /> */}
      </div>
      <div className="container-products fluid">
        {filtrarAlimentos.map((product) => (
          <Card className="container-cards">
            <Card.Img variant="top" src={product.url_img} width="10px" />
            <Card.Body>
              <Card.Title>{product.nombre_producto}</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                {product.tipo_producto}
              </Card.Subtitle>
              <Card.Text>{product.nombre_tienda}</Card.Text>
              <hr />
              <span className="mx-2">{product.telefono_tienda}</span>
              <h3 className="mt-2">$ {product.precio_kg}</h3>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CardPagProduct;