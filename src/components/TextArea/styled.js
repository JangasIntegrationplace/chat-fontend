import styled from "styled-components";

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextField = styled.textarea`
  border-radius: 15px;
  width: 230px;
  background-color: #e6e6e6;
  max-height: calc(3rem + 10px);
  font-size: 1rem;
  padding: 10px;
  height: max-content;
  border-radius: 15px;
  &::-webkit-resizer {
    display: none;
  }
  border: none;
  outline: none;
  caret-color: #ce1e5b;
  font-family: Montserrat;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const SendButton = styled.div`
  transition: transform 0.3s ease-in-out;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #248c73;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  :active {
    transform: scale(0.9);
  }
  &:before {
    content: url(${({ icon }) => icon});
    display: block;
    /* display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; */
    padding: 10px 12px;
  }
`;
