import React from "react";
import styled from "styled-components";

const Message = ({ username, rol, message, timestamp }) => {
  return (
    <Wrapper>
      <div className="messageInfo">
        <div className="message">
          <span className="user">{username}</span>
          <span className="rol"> ({rol})</span>
          <span className="messageTimestamp">
            {new Date(timestamp).toLocaleDateString()}
          </span>
          <p>{message}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  .user{
      color: orange;
  }
  .rol{
      color: orangered;
  }
  .messageInfo {
    margin-left: 20px;
  }
  .messageTimestamp {
    color: gray;
    margin-left: 20px;
    font-size: x-small;
  }
`;

export default Message;
