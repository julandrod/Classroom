import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { login } from "../../store/userSlice";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(response);
      dispatch(
        login({
          userId: response.data._id,
          username: response.data.username,
          email: response.data.email,
          rol: response.data.rol,
        })
      );
      window.location.replace("/clase")
    } catch (error) { }
  };

  return (
    <Wrapper>
      <div className="loginBackground">
        <img src={logo} alt="logo" className="logo" />
        <span className="title">Ingresar</span>
        <form className="form" onSubmit={handleSubmit}>
          <label>Nombre de usuario</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Ingrese un nombre de usuario..."
            ref={usernameRef}
            autoFocus
          />
          <label>Contraseña</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Ingrese una contraseña..."
            ref={passwordRef}
          />
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
        <span className="loginOption">
          ¿No tienes una cuenta? <Link to="/registro">Crear cuenta</Link>
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  .loginBackground {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    padding: 50px;
  }
  .logo {
    width: 300px;
    position: absolute;
    top: 100px;
  }
  .title {
    margin-top: 20px;
    font-size: 30px;
  }
  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .form > label {
    margin: 10px 0;
  }
  .loginInput {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
  }
  .loginButton {
    margin-top: 20px;
    cursor: pointer;
    background-color: #cc6704;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;
    width: 200px;
  }
  .loginOption {
    margin-top: 30px;
  }
  .loginOption > a {
    color: #cc6704;
    text-decoration: none;
  }
`;

export default Login;
