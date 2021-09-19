import React from "react";
import Logo from "./logo.svg";
import { Button } from "./styled";

export default function index({ icon }) {
  return (
    <Button>
      <img src={icon || Logo} alt="" width="40px" />
    </Button>
  );
}
