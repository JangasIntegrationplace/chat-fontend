import styled, { css } from "styled-components";

export const Alert = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  top: 58px;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 20px;
  padding: 8px 0px;
  z-index: 10;
  background-color: #72c5cd;
  border-bottom: 1px solid #88ebf5;
  border-top: 1px solid #88ebf5;
  color: white;
  transform: translatey(-10px);
  font-size: 0.9rem;
  ${({ error }) =>
    error &&
    css`
       {
        background-color: #ea4e54;
        border-bottom: 1px solid #ff7b80;
        border-top: 1px solid #ff7b80;
      }
    `}
  &.show {
    opacity: 1;
    transform: translatey(0px);
  }
`;
