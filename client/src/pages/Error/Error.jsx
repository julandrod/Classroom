import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectUser } from "../../store/userSlice";

const Error = () => {
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Lo siento, esta pagina no se encuentra.</h3>
        <Link to="/clase" className="btn">
          {user ? "Volver a la clase" : "Voler a la zona de ingreso"}
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - 10rem);
  padding: 5rem 0;
  background-color: #363a3f;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  h1, h3{
      color: white;
  }
  .btn{
      text-decoration: none;
      font-size: 20px;
      color: orange;
  }
`;

export default Error;
