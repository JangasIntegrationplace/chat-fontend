import styled from "styled-components";
export const Button = styled.div`
  transform: transform 0.3s ease;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  cursor: pointer;
  &:active {
    transform: scale(1.05);
  }
`;
