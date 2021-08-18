//React Productos.css
import "./Productos.css";
//Routes
import UseAdmin from "../../../useUtils/UseAdmin";

const Productos = () => {
    //States and Hooks
    const { MapProductosEnHome } = UseAdmin();
    return (
        <div>
            <div className="mt-5">
                <h3 className="titles">Productos Disponibles</h3>
            </div>
            <div className="m-2">
                <div className="productosCompras">
                    {MapProductosEnHome}
                </div>
            </div>
        </div>
    );
};
export default Productos;
