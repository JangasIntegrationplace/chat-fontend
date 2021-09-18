import styled, { css } from "styled-components";
export const Message = styled.div`
  padding: 15px;
  min-height: max-content;
  width: max-content;
  max-width: 250px;
  height: max-content;
  border-radius: 25px 25px 0px 25px;
  background-color: #248c73;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;

  text-align: left;
  color: white;
  align-self: end;
  &::-webkit-resizer {
    display: none;
  }
  ${({ customerCare }) =>
    customerCare &&
    css`
      border-radius: 25px 25px 25px 0px;
      background-color: #e6e6e6;
      color: white;
      color: #1c1c1c;
      align-self: start;
    `}
`;
