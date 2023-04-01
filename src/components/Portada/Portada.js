import './Portada.css';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="body">
            <div className="banner">
                <img
                    src="https://expertreviews.b-cdn.net/sites/expertreviews/files/2022/07/best_budget_smartphone_uk_2022_cheap_phones_0.jpg"
                    className="bg"
                />
                <div className="content">
                    <h2 className="titulo">Busca tu celular aqui</h2>
                    <p className="descripcion">
                        Bienvenido a{' '}
                        <b>
                            <i>e-commers</i>
                        </b>
                        , esta pagina tiene el fin de que los usuarios busquen solucionar el problema de no
                        poder tener ni amigos editores o tutoriales exitosos. Aqui los usuarios puede ingresar y buscar packs de edicion y comprar los
                                servicios de un editor para realizar en su foto lo que el pack que el usuario
                                eligio, dice y a un modico precio.
                    </p>
                    <Button variant="outline-info">Ver Productos</Button>
                </div>
            </div>
        </div>
    );
};
export default Header;
