import React, { Fragment } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardBlog = () => {
    return (
        <Fragment>
            <Card className="mt-4 shadow w-75 mx-auto">
                <Card.Header className="bg-success text-white fs-3">Nuestro Blog Saludable</Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={3}>
                            <Card.Img variant="top" alt="frutas" src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633049670/Tu%20Tienda%20Cercana/blog_saludable_rfeg1r.jpg" />
                        </Col>
                        <Col>
                            <Card.Text>
                                Muchos creemos que llevar una vida saludable, una dieta sana y
                                una rutina de ejercicios es cada vez más difícil con lo
                                demandante que se ha vuelto nuestra sociedad. Las largas
                                jornadas laborales, el estrés del tráfico, las actividades
                                diarias, la familia y muchos otros aspectos más son factores
                                que pueden limitar la práctica de buenos hábitos de salud si
                                no se tiene la información correcta.
                            </Card.Text>
                            <Link to="/blog" className="btn btn-warning">Leer mas...</Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
            <Card className="mt-4 shadow w-75 mx-auto">
                <Card.Header className="bg-success text-white fs-3">Blog Recomendado</Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={3}>
                            <Card.Img variant="top" alt="dieta" src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633049670/Tu%20Tienda%20Cercana/adelgaza_con_susy_n6jgoa.jpg" />
                        </Col>
                        <Col>
                            <Card.Text>
                                Susi es dietista y por su experiencia con el manejo del
                                sobrepeso decidió desarrollar este blog para aportar a su
                                comunidad de lectores recetas y menús nutritivos para perder
                                peso. La autora admite que no hay fórmulas mágicas ni
                                alimentos exclusivos para adelgazar, por ello recomienda
                                cambiar los hábitos alimenticios por unos más saludables,
                                aprender a comer mejor y mantener la nueva rutina para
                                alcanzar el peso deseado.
                            </Card.Text>
                            <Button href="http://adelgazaconsusi.blogspot.com/" variant="warning" target="_blank">Leer mas...</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        </Fragment>
    )
}

export default CardBlog
