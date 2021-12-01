import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';

export default class ProductosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            loading: false,
            producto: {
                nombre_tienda: '',
                telefono_tienda: '',
                email_tienda: '',
                direccion_tienda: '',
                ciudad: '',
                tipo_producto:'',
                nombre_producto: '',
                precio_kg:'',
                url_img:'',

            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(index, value) {
        this.setState({
            producto: {
                ...this.state.producto,
                [index]: value,
            },
        });
    }

    guardarProductos() {
        this.setState({ loading: true });
        request
            .post('/registro_productos', this.state.producto)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');
    }

    render() {
        return (
            <Container id="productos-crear-container">
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />

                <Row>
                    <h2>Crear Registro Tiendas y Productos</h2>
                </Row>
                <Row>
                <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('nombre_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Teléfono Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('telefono_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('direccion_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>E-mail Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('email_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('ciudad', e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Label>Nombre Producto</Form.Label>
                        <Form.Select className="mb-3" 
                            controlId="formBasic"
                            aria-label="Default select example"
                            onChange={(e) => this.setValue('nombre_producto', e.target.value)}>
                                <option value="N/A">Seleccione una opción</option>
                                <option value="Ajo">Ajo</option>
                                <option value="Banano">Banano</option>
                                <option value="Coco">Coco</option>
                                <option value="Kiwi">Kiwi</option>
                                <option value="Lomo">Lomo de res</option>
                                <option value="Mango">Mango</option>
                                <option value="Manzana Roja">Manzana Roja</option>
                                <option value="Naranja">Naranja</option>
                                <option value="Pechuga">Pechuga</option>
                                <option value="Pepino">Pepino</option>
                                <option value="Piña">Piña</option>
                                <option value="Sobrebarriga">Sobrebarriga</option>
                                <option value="Tomate">Tomate</option>
                                <option value="Zanahoria">Zanahoria</option>
                                
                            </Form.Select> 

                        
                            <Form.Label>Tipo Producto</Form.Label>
                            <Form.Select className="mb-3" 
                            controlId="formBasic"
                            aria-label="Default select example"
                            onChange={(e) => this.setValue('tipo_producto', e.target.value)}>
                                <option value="N/A" >Seleccione una opción</option>
                                <option value="Frutas">Frutas</option>
                                <option value="Verduras">Verduras</option>
                                <option value="Carnes">Carnes</option>
                            </Form.Select>
                            

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Precio por Kilo</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('precio_kg', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Select className="mb-3" 
                            controlId="formBasic"
                            aria-label="Default select example"
                                onChange={(e) => this.setValue('url_img', e.target.value)}>
                                <option value="N/A">Seleccione una opción</option>
                                <option value="https://bit.ly/Ajo_">https://bit.ly/Ajo_</option>
                                <option value="https://bit.ly/Banano_">https://bit.ly/Banano_</option>
                                <option value="https://bit.ly/Coco_coco">https://bit.ly/Coco_coco</option>
                                <option value="https://bit.ly/Kiwi_Kiwi">https://bit.ly/Kiwi_Kiwi</option>
                                <option value="https://bit.ly/Lomo_res">https://bit.ly/Lomo_res</option>
                                <option value="https://bit.ly/Mango_oneco">https://bit.ly/Mango_oneco</option>
                                <option value="https://bit.ly/Manzana_Roja7">https://bit.ly/Manzana_Roja</option>
                                <option value="https://bit.ly/Naranja_Naranja">https://bit.ly/Naranja_Naranja</option>
                                <option value="https://bit.ly/Pechuga_">https://bit.ly/Pechuga_</option>
                                <option value="https://bit.ly/Pepino_">https://bit.ly/Pepino_</option>
                                <option value="https://bit.ly/Piña_">https://bit.ly/Piña_</option>
                                <option value="https://bit.ly/Sobrebarriga_">https://bit.ly/Sobrebarriga_</option>
                                <option value="https://bit.ly/Tomate_Tomate">https://bit.ly/Tomate_Tomate</option>
                                <option value="https://bit.ly/Zanahoria_">https://bit.ly/Zanahoria_</option>
                            </Form.Select>

                        <Button
                            variant="success"
                            onClick={() =>
                                console.log(this.guardarProductos())}
                        >
                            Crear
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
