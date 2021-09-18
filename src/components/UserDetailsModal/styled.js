import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  input {
    height: 35px;
    border-radius: 48px;
    border: 1px solid #3cb187;
    width: 80%;
    padding: 10px 15px;
    font-size: 1rem;
    outline: none;
  }
`;

export const Button = styled.div`
  transition: all 0.2s ease-out;
  width: 170px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ce1e5b;
  border-radius: 48px;
  color: white;
  user-select: none;
  :active {
    transform: scale(0.9);
  }
  :hover {
    background-color: #248c73;
  }
`;
