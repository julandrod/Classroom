import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <Wrapper>
      <iframe
        className="video"
        width="600"
        height="355"
        src="https://www.youtube.com/embed/wSxEtpqU0D4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  flex: 0.7;
  background-color: #363a3f;
  align-items: center;
  justify-content: center;
  .video {
    align-items: center;
    justify-content: center;
  }
`;

export default Video;
