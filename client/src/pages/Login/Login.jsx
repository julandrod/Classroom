import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { HomeLayout } from "../../components";
import {
  displayAlert,
  getUserInfoLogin,
  selectUserState,
} from "../../store/userSlice";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLoading, userError, errorInfo, token } =
    useSelector(selectUserState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      getUserInfoLogin({ email: userInfo.email, password: userInfo.password })
    );
  };

  useEffect(() => {
    if (userError) {
      dispatch(displayAlert({ alertText: errorInfo, alertType: "danger" }));
    }
    if (token) {
      dispatch(displayAlert({ alertText: "Ingresando a la clase...", alertType: "success" }));
      setTimeout(() => {
        history.push("/clase");
      }, 3000);
    }
  }, [history, token, dispatch, userError, errorInfo]);

  return (
    <HomeLayout title="Ingresar" message={errorInfo}>
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className="loginInput"
            type="email"
            placeholder="Ingrese su correo..."
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            value={userInfo.email}
            autoFocus
          />
          <label>Contraseña</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Ingrese su contraseña..."
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            value={userInfo.password}
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
    margin-top: 30px;
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
