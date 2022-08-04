import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeLayout } from "../../components";


const Home = () => {
  return (
    <HomeLayout title="Bienvenido al sistema de clases virtuales">
      <Wrapper>
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
      </Wrapper>
    </HomeLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;


export default Home;
