import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 300px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 48px 1fr max-content;
  padding: 15px;
  background: white;
  @media screen and (max-width: 400px) {
    width: 280px;
  }
`;

export const MessagesContainer = styled.div`
  padding: 25px 4px 25px 0px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 95%;
  height: 90%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
`;
export const MessagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  :after {
    content: "";
    width: 100%;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
  :before {
    content: "";
    width: 100%;
    height: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
`;
