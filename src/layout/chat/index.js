import React from "react";
import MessageBox from "../../components/MessageBox";
import { ChatContainer, MessagesContainer, MessagesWrapper } from "./styled";
import ChatHeader from "../../components/ChatHeader";
import TextArea from "../../components/TextArea";
import _ from "lodash";

export default function chat({ closeChatBox, conversation, postMessage }) {
  return (
    <ChatContainer>
      <ChatHeader closeChatBox={closeChatBox} />
      <MessagesWrapper>
        <MessagesContainer>
          {_.orderBy(conversation, ["timestamp"], ["asc"]).map((message) => (
            <MessageBox
              key={message.id}
              isCustomerCare={message.send_by_user}
              contents={message.body}
            />
          ))}
        </MessagesContainer>
      </MessagesWrapper>
      <TextArea postMessage={postMessage} />
    </ChatContainer>
  );
}
