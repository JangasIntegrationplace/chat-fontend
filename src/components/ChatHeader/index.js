import React from "react";
import { Header } from "./styled";
import CloseIcon from "./close.svg";
export default function index({ closeChatBox, title }) {
  return (
    <Header>
      <p className="header-text">{title || "Customer Care"}</p>
      <img
        src={CloseIcon}
        alt="close icon"
        width="20px"
        onClick={closeChatBox}
      />
    </Header>
  );
}
