import { Card, Button } from "react-bootstrap"
import "./CardProduct.css"

const CardProduct = () => {
    return (
        <div className="about">
            <div className="Jobs mt-5">
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" src="https://www.tremplin-numerique.org/wp-content/uploads/2020/11/La-date-de-sortie-du-Samsung-Galaxy-S21-a-fui.jpg" />
                        <Card.Body>
                            <Card.Title><b>Phones</b></Card.Title>
                            <Card.Text>
                                Se realiza el pedido desde cualquien dispositivo con acceso a internet, selecciona el producto y lo lleva al carrito.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" src="https://www.imperiorelojes.com/wp-content/uploads/2020/03/partes-de-un-reloj.jpg" />
                        <Card.Body>
                            <Card.Title><b>Rollexs</b></Card.Title>
                            <Card.Text>
                                Despues selecciona su forma de pago mas conveniente y lo paga, tendra que esperar un tiempo, porque tenemos los mejores servicios de mensajeria.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="cardJob mt-2">
                        <Card.Img variant="top" src="https://blog.wildix.com/wp-content/uploads/2020/01/Quick-Tips-for-Organizing-Your-Gmail-Inbox.jpg" />
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