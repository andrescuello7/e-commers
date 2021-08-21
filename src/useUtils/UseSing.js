import axios from "axios";
import { useState } from "react";

const UseSing = () => {
    //Inicio de session States
    const [singIn, setSingIn] = useState({});
    const [sessionUser, setSessionUser] = useState({})
    const [sessionAlert, setSessionAlert] = useState(false)

    //Vista de credenciales
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...sessionUser, [name]: value };
        setSessionUser(changedInput);
    };

    //Iniciar Session
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("auth", sessionUser);
            localStorage.setItem("token", data);
            window.location.href = "/";
        } catch (error) {
            console.log(error);
            setSessionAlert(true)
        }
    };

    //Registro del usuario


    const SingChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...singIn, [name]: value, fondo: "blanco" };
        setSingIn(changedInput);
    };

    const SingSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("user", singIn);
            localStorage.setItem("token", data);
            window.location.href = "/";
        } catch (error) {
            console.log(error);
            setSessionAlert(true)
        }
    };
    return {
        SingChange,
        SingSubmit,
        setSessionUser,
        HandleChange,
        HandleSubmit,
        sessionUser,
        sessionAlert
    };
};
export default UseSing;