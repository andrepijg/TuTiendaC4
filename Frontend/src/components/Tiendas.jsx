import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {obtenerTiendas} from '../services/index'
import ListaTiendas from './tiendas/ListaTiendas';


const Tiendas = () => {

    const [tiendas, setTiendas] = useState([]);

    useEffect(() => {
        async function cargarTiendas() {
            //const response = await obtenerTiendas()
            setTiendas(await obtenerTiendas())
            // if (response.status === 200) {
            //     setTiendas(response.data)
            // }
        }
        cargarTiendas();
    }, [])

    const arrayTiendas = tiendas.map((tienda) => {
        return tienda._id;
    })

    return (
        <Container>
            <h1 className="text-center my-5">TIENDAS</h1>
            <Row>
                {
                    arrayTiendas.map((tienda, i) => (
                        <Col xs={12} sm={6} md={5} lg={3} xl={3} xxl={2} key={i}>
                            <ListaTiendas tienda={tienda} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Tiendas