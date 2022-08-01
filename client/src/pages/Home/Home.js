import React from 'react'
import logo from "../../assets/logo.png";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Wrapper>
      <div className="loginBackground">
        <img src={logo} alt="logo" className="logo" />
        <span className="title">Bienvenido al sistema de clases virtuales</span>
        <Link to="/registro">
          <button type="button" className="welcomeRegisterButton">
            Crear cuenta
          </button>
        </Link>
        <Link to="/ingreso">
          <button type="button" className="welcomeLoginButton">
            Ingresar
          </button>
        </Link>
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
        margin: 50px;
        font-size: 30px;
        text-align: center;
      }
      .welcomeRegisterButton {
        margin-top: 20px;
        cursor: pointer;
        background-color: #cc6704;
        border: none;
        color: white;
        border-radius: 10px;
        padding: 10px;
        width: 200px;
      }
      .welcomeLoginButton {
        margin-top: 20px;
        cursor: pointer;
        background-color: #505050;
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

export default Home
