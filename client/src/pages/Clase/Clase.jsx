import React from "react";
import styled from "styled-components";
import Chat from "../../components/Chat/Chat";
import Video from "../../components/Video/Video";

const Clase = () => {
  return (
    <Wrapper>
      <Video/>
      <Chat />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export default Clase;
