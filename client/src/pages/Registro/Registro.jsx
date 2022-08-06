import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { HomeLayout } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  displayAlert,
  registerUser,
  selectUserState,
} from "../../store/userSlice";

const Registro = () => {
  const [usuario, setUsuario] = useState({
    username: "",
    email: "",
    rol: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { userError, errorInfo, userInfo } = useSelector(selectUserState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      registerUser({
        username: usuario.username,
        email: usuario.email,
        password: usuario.password,
      })
    );
  };

  useEffect(() => {
    if (userError) {
      dispatch(displayAlert({ alertText: errorInfo, alertType: "danger" }));
    }
    if (userInfo) {
      dispatch(
        displayAlert({
          alertText: "Redireccionando a login...",
          alertType: "success",
        })
      );
      setTimeout(() => {
        history.push("/ingreso");
      }, 3000);
    }
  }, [dispatch, errorInfo, history, userError, userInfo]);

  return (
    <HomeLayout title="Registro">
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputContainer">
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
          </div>
          <div className="inputContainer">
            <label>Email</label>
            <input
              className="registerInput"
              type="email"
              placeholder="Ingrese un email..."
              onChange={(e) =>
                setUsuario({ ...usuario, email: e.target.value })
              }
              required
            />
          </div>
          <div className="inputContainer">
            <label>Rol</label>
            <div className="selectOptions">
              <select
                name="select"
                onChange={(e) =>
                  setUsuario({ ...usuario, rol: e.target.value })
                }
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
          </div>
          <div className="inputContainer">
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
          </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
  .inputContainer {
    display: flex;
    margin: 10px 0;
    flex-direction: column;
    label {
      margin: 10px 0;
    }
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
