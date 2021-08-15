import './Portada.css';

const Header = () => {
    return (
        <div className="body">
            <div className="banner">
                <img
                    src="https://cdn.wallpapers4k.info/file/wallpaper-coffee-coffee-pot-coffee-shop-1579429805-3840x2400.jpg"
                    className="bg"
                />
                <div className="content">
                    <h2 className="titulo">e-commers</h2>
                    <p className="text-light">
                        Bienvenido a{' '}
                        <b>
                            <i>e-commers</i>
                        </b>
                        , esta pagina tiene el fin de que los usuarios busquen solucionar el problema de no
                        poder tener ni amigos editores o tutoriales exitosos. Aqui los usuarios puede ingresar y buscar packs de edicion y comprar los
                                servicios de un editor para realizar en su foto lo que el pack que el usuario
                                eligio, dice y a un modico precio.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Header;
