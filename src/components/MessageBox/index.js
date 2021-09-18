import React from "react";
import { Message } from "./styled";
export default function index({ isCustomerCare, contents }) {
  return (
    <Message customerCare={isCustomerCare}>
      <div className="message-content">{contents}</div>
    </Message>
  );
}
