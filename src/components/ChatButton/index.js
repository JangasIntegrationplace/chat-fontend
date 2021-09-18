import React from "react";
import Logo from "./slack-logo.svg";
import { Button } from "./styled";

export default function index() {
  return (
    <Button>
      <img src={Logo} alt="" width="40px" />
    </Button>
  );
}
