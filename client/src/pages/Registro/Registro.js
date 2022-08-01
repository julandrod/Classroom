import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Registro = () => {
  const [usuario, setUsuario] = useState({
    username: "",
    email: "",
    rol: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", {
        username: usuario.username,
        email: usuario.email,
        rol: usuario.rol,
        password: usuario.password,
      });
      response.data && window.location.replace("/ingreso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="registerBackground">
        <img src={logo} alt="logo" className="logo" />
        <span className="title">Registro</span>
        <form className="form" onSubmit={handleSubmit}>
          <label>Nombre de usuario</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Ingrese un nombre de usuario..."
            onChange={(e) =>
              setUsuario({ ...usuario, username: e.target.value })
            }
            autoFocus
            required
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="email"
            placeholder="Ingrese un email..."
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            required
          />
          <label>Rol</label>
          <div className="selectOptions">
            <select
              name="select"
              onChange={(e) => setUsuario({ ...usuario, rol: e.target.value })}
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Seleccione un rol
              </option>
              <option value="Estudiante">Estudiante</option>
              <option value="Moderador">Moderador</option>
            </select>
          </div>
          <label>Contraseña</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Ingrese una contraseña..."
            onChange={(e) =>
              setUsuario({ ...usuario, password: e.target.value })
            }
            required
          />
          <button type="submit" className="registerButton">
            Registro
          </button>
        </form>
        <span className="loginOption">
          ¿Ya tienes una cuenta? <Link to="/ingreso">Ingresar</Link>
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
  .registerBackground {
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
  .registerInput {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
  }
  .registerButton {
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

export default Registro;
