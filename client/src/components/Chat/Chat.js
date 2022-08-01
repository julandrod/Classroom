import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { io } from "socket.io-client";
import Message from "../Message/Message";
import styled from "styled-components";

const Chat = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");

  const socket = useRef();
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    const getChatMessages = async () => {
      const response = await axios.get("/messages");
      setMensajes(response.data);
    };
    getChatMessages();
  }, []);

  useEffect(() => {
    socket.current = io("ws://localhost:7001");
    socket.current.on("mensajes", ({ username, rol, message }) => {
      setMensajes([...mensajes, { username, rol, message }]);
    });

    return () => {
      socket.current.off();
    };
  }, [mensajes]);

  useEffect(() => {
    socket.current.emit("conectado", user.username, user.rol);
  }, [user.username, user.rol]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const handleMessage = async (e) => {
    e.preventDefault();

    socket.current.emit("mensaje", user.username, user.rol, input);

    const newMessage = {
      userId: user.userId,
      username: user.username,
      rol: user.rol,
      message: input,
    };
    try {
      await axios.post("/messages", newMessage);
      setInput("");
    } catch (error) {}
  };

  return (
    <Wrapper>
      <div className="chatMessages">
        {mensajes.map((mensaje) => (
          <Message
            username={mensaje.username}
            rol={mensaje.rol}
            message={mensaje.message}
            timestamp={mensaje.createdAt}
          />
        ))}
        <div ref={divRef}></div>
      </div>
      <div className="chatInput">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Di algo..."
          />
          <button
            type="submit"
            onClick={handleMessage}
            className="chatInputButton"
          >
            Enviar
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  background-color: #363a3f;
  border-left: 1px solid black;
  height: calc(100vh - 50px);
  .chatMessages {
    flex: 1;
    overflow: scroll;
  }
  .chatMessages::-webkit-scrollbar {
    display: none;
  }
  .chatMessages {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .chatInput {
    color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    margin: 20px;
    border-top: 1px solid gray;
    background-color: #474b53;
  }
  .chatInput > form > input {
    padding: 5px;
    background: transparent;
    width: 100%;
    border: none;
    outline-width: 0;
    color: white;
    font-size: large;
  }
  .chatInput > form {
    flex: 1;
  }
  .chatInputButton {
    display: none;
  }
`;

export default Chat;
