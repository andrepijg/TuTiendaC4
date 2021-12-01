import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Card, Container } from 'react-bootstrap'
import shop from "../../assets/shop.jpg";
import "./ListaTiendas.css";

const ListaTiendas = (props) => {
    return (
        <Container>
            <div className="container-tiendas fluid">
                <Card className="container-cards" border="secondary">
                    {/* <Card.Header>{props.tienda.nombre_tienda}</Card.Header> */}
                    <Card.Img variant="top" src={shop} />
                    <Card.Body>
                        <Card.Title>{props.tienda.nombre_tienda}</Card.Title>
                        <Card.Subtitle className="mb-4 text-muted">{props.tienda.direccion_tienda}</Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">{props.tienda.ciudad}</Card.Subtitle>
                        <hr />
                        <Card.Text>
                            <FontAwesomeIcon icon={faAt} />
                            <span className="mx-2">{props.tienda.email_tienda}</span>
                        </Card.Text>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span className="mt-2">{props.tienda.telefono_tienda}</span>
                    </Card.Body>
                </Card>
            </div>
        </Container>

    )
}
export default ListaTiendas;

