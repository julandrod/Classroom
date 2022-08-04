import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeLayout } from "../../components";
import { login } from "../../store/userSlice";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(data);
      dispatch(
        login({
          userId: data.user._id,
          username: data.user.username,
          email: data.user.email,
          rol: data.user.rol,
        })
      );
      window.location.replace("/clase");
    } catch (error) {}
  };

  return (
    <HomeLayout title="Ingresar">
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Ingrese su correo..."
            ref={emailRef}
            autoFocus
          />
          <label>Contraseña</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Ingrese su contraseña..."
            ref={passwordRef}
          />
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
        <span className="loginOption">
          ¿No tienes una cuenta? <Link to="/registro">Crear cuenta</Link>
        </span>
      </Wrapper>
    </HomeLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
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
