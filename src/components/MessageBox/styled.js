import styled, { css } from "styled-components";
export const Message = styled.div`
  min-height: max-content;
  max-width: 250px;
  height: max-content;
  font-size: 1rem;
  text-align: right;
  align-self: end;
  color: white;
  .message-content {
    border-radius: 25px 25px 0px 25px;
    background-color: #248c73;
    padding: 15px;
  }
  .meta-data {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.8rem;
    margin-top: 5px;
  }
  ${({ customerCare }) =>
    customerCare &&
    css`
      align-self: start;
      text-align: left;
      .message-content {
        border-radius: 25px 25px 25px 0px;
        background-color: #e6e6e6;
        color: white;
        color: #1c1c1c;
      }
    `}
`;
