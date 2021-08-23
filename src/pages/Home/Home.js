import Portada from "../../components/Portada/Portada"
import CardProduct from "../../components/CardProduct/CardProduct"
import "./Home.css"
//Routes
import UseAdmin from "../../useUtils/UseAdmin";

const Home = () => {
  //States and Hooks
  const { MapProductosEnHome } = UseAdmin();
  return (
    <div className="home">
      <div>
        <Portada />
      </div>
      <div>
        <h3 className="titles">Pasos a seguir</h3>
        <CardProduct />
      </div>
      <h3 className="titles">Productos</h3>
      <div className="w-100 d-flex justify-content-center">
        <div className="productosHome">
          {MapProductosEnHome}
        </div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};
export default Home;

//animation option no funcion for moment:  sticky-top animate__animated animate__bounce