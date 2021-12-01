import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardProductos.css";

const CardProductos = () => {
  const categorias = [
    {
      img: "https://res.cloudinary.com/dgjrfgl2e/image/upload/v1638334374/Tu%20Tienda%20Cercana/frutas_iv736d.png",
      categoria: "Frutas",
    },
    {
      img: "https://res.cloudinary.com/dgjrfgl2e/image/upload/v1636605665/Tu%20Tienda%20Cercana/VERDURAS_zcl0ma.png",
      categoria: "Verduras",
    },
    {
      img: "https://res.cloudinary.com/dgjrfgl2e/image/upload/v1638334374/Tu%20Tienda%20Cercana/carnes_opwsts.png",
      categoria: "Carnes",
    },
  ];
  const guardarLocalstorage = (categoria) => {
    localStorage.setItem("tipo", categoria);
  };
  return (
    <Container className="container-cards-productos">
      <div className="background-ola">
        <h2>Nuestros Productos </h2>
        <div className="container-links-cards">
          {categorias.map((cat) => (
            <Link
              to="/productos"
              key={cat.categoria}
              className="imagen-link"
              onClick={() => guardarLocalstorage(cat.categoria)}
            >
              <img src={cat.img} alt="" />
            </Link>
          ))}
        </div>
      </div>
      <div className="wave"></div>
    </Container>
  );
};

export default CardProductos;