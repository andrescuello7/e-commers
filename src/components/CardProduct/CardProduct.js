import { Card } from "react-bootstrap"
import "./CardProduct.css"

const CardProduct = () => {
    return (
        <div className="about">
            <div className="Jobs">
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" className="cardImg" src="https://www.infotechnology.com/files/image/29/29225/5f80c0280ebe5.jpg" />
                        <Card.Body>
                            <Card.Title className="CardTitle">Productos</Card.Title>
                            <Card.Text className="CardDescripcion">
                                Se realiza el pedido desde cualquien dispositivo con acceso a internet, selecciona el producto y lo lleva al carrito.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" className="cardImg" src="https://eresmama.com/wp-content/uploads/2016/09/shutterstock_392375377.jpg" />
                        <Card.Body>
                            <Card.Title className="CardTitle">Tiempo</Card.Title>
                            <Card.Text className="CardDescripcion">
                                Despues selecciona su forma de pago mas conveniente y lo paga, tendra que esperar un tiempo, pero no mucho.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" className="cardImg" src="http://www.automotores-rev.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-03-at-06.39.13.png" />
                        <Card.Body>
                            <Card.Title className="CardTitle">Llega a Casa</Card.Title>
                            <Card.Text className="CardDescripcion">
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