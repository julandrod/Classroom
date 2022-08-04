import styled from "styled-components";
import logo from "../../assets/logo.png"

const HomeLayout = ({ children, title }) => {
  return (
    <Wrapper>
      <div className="loginBackground">
        <div className="logoTitleContainer">
          <img src={logo} alt="logo" className="logo" />{" "}
          <span className="title">{title}</span>
        </div>
        {children}
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
    justify-content: flex-start;
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    padding: 50px;
  }
  .logoTitleContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    margin-top: 30px;
    width: 300px;
    border-radius: 10px;
    
  }
  .title {
    margin: 20px;
    font-size: 30px;
    text-align: center;
  }
`;

export default HomeLayout;
