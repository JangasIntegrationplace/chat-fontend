import React from "react";
import { Message } from "./styled";
import moment from "moment";
export default function index({ isCustomerCare, contents }) {
  return (
    <>
      <Message customerCare={isCustomerCare}>
        <div className="message-content">{contents.body}</div>
        <div className="meta-data">
          {moment(contents.timestamp).format("LT")}
        </div>
      </Message>
    </>
  );
}
