import { Card } from "react-bootstrap"
import "./CardProduct.css"

//Img for present
import reloj from "../../img/reloj.jpeg"
import ubicacion from "../../img/ubicacion.jpeg"
import fecha from "../../img/fecha.jpeg"
const CardProduct = () => {
    return (
        <div className="about">
            <div className="Jobs">
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" className="cardImg" src={ubicacion} />
                        <Card.Body>
                            <Card.Title><b>Productos</b></Card.Title>
                            <Card.Text>
                                Se realiza el pedido desde cualquien dispositivo con acceso a internet, selecciona el producto y lo lleva al carrito.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" className="cardImg" src={reloj} />
                        <Card.Body>
                            <Card.Title><b>Tiempo</b></Card.Title>
                            <Card.Text>
                                Despues selecciona su forma de pago mas conveniente y lo paga, tendra que esperar un tiempo, porque tenemos los mejores servicios de mensajeria.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" className="cardImg" src={fecha} />
                        <Card.Body>
                            <Card.Title><b>Llega a Casa</b></Card.Title>
                            <Card.Text>
                                Cuando llega a casa lo firma confirmando que lo recibio para evitar confuciones y problemas legales, disfrute del profucto seleccionado.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;