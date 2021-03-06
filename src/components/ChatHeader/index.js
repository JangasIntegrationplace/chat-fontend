import React from "react";
import { Header } from "./styled";
import CloseIcon from "./close.svg";
export default function index({ closeChatBox }) {
  return (
    <Header>
      <p className="header-text">Customer Care</p>
      <img
        src={CloseIcon}
        alt="close icon"
        width="20px"
        onClick={closeChatBox}
      />
    </Header>
  );
}
