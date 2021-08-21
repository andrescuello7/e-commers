import axios from "axios";
import { useState } from "react";

const UseAdmin = () => {
  //States de modal

  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [textFormProducto, setTextFormProducto] = useState({});
  const token = localStorage.getItem("token");

  //Vista de credenciales
  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...textFormProducto, [name]: value };
    setTextFormProducto(changedInput);
  };

  //Iniciar Session
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const headers = { "x-auth-token": token };
    try {
      await axios.post("post", textFormProducto,
        { headers });
      handleShow()
    } catch (error) {
      console.log(error);
      setAlert(true)
    }
  };

  return {
    HandleSubmit, 
    HandleChange, 
    handleClose, 
    handleShow, 
    alert, 
    show
  };
};
export default UseAdmin;