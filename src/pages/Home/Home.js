import Portada from "../../components/Portada/Portada"
import CardProduct from "../../components/CardProduct/CardProduct"
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <div>
        <Portada />
      </div>
      <div>
        <CardProduct />
      </div>
    </div>
  );
};
export default Home;

//animation option no funcion for moment:  sticky-top animate__animated animate__bounce