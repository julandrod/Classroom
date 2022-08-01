import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../store/userSlice";
import userLogo from "../../assets/user.png";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="topLeft">
        <Link to="/settings">
          <img className="topImg" src={userLogo} alt="log pic" />
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li
            className="topListItem"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Salir de la sesión
          </li>
        </ul>
      </div>
      <div className="topRight">
        <a
          href="https://www.facebook.com/kuepaedutech"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-facebook-f"> </i>
        </a>
        <a href="https://twitter.com/KuepaCo" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/kuepaedutech/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-instagram"></i>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #24272b;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  .topLeft,
  .topRight {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .topCenter {
    flex: 6;
  }
  .topIcon {
    font-size: 20px;
    margin-right: 10px;
    color: white;
    cursor: pointer;
  }
  .topImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
  .topList {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .topListItem {
    margin-right: 20px;
    font-size: 18px;
    font-weight: bold;
    font-weight: 300;
    color: orange;
    cursor: pointer;
  }
  .topSearchIcon {
    font-style: 18px;
    color: #666;
    cursor: pointer;
    margin-left: 15px;
  }
`;

export default Navbar;
