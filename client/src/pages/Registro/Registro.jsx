import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HomeLayout } from "../../components";

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
      const response = await axios.post("/api/v1/auth/register", {
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
    <HomeLayout title="Registro">
      <Wrapper>
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
      </Wrapper>
    </HomeLayout>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form {
    display: flex;
    flex-wrap: wrap;
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
    margin-top: 20px;
  }
  .loginOption > a {
    color: #cc6704;
    text-decoration: none;
  }
`;

export default Registro;
