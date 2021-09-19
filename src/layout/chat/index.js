import { useEffect, useRef } from "react";
import MessageBox from "../../components/MessageBox";
import { ChatContainer, MessagesContainer, MessagesWrapper } from "./styled";
import ChatHeader from "../../components/ChatHeader";
import TextArea from "../../components/TextArea";
import _ from "lodash";
import UserDetailsModal from "../../components/UserDetailsModal";

export default function Chat({
  closeChatBox,
  conversation,
  postMessage,
  showAlert,
  isLive,
  createThread,
  isFirstTime,
  title,
}) {
  let messageContainer = useRef(null);
  useEffect(() => {
    if (messageContainer && !isFirstTime) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, []);
  useEffect(() => {
    if (messageContainer && !isFirstTime) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [conversation, isFirstTime, messageContainer]);
  return (
    <ChatContainer>
      <ChatHeader closeChatBox={closeChatBox} title={title} />
      {!isFirstTime ? (
        <MessagesWrapper>
          <MessagesContainer ref={(el) => (messageContainer = el)}>
            <p className="start-text">This is the start of your converstion.</p>
            {conversation.length && isLive
              ? _.orderBy(conversation, ["timestamp"], ["asc"]).map(
                  (message, i) => (
                    <MessageBox
                      key={i}
                      isCustomerCare={!message.send_by_user}
                      contents={message}
                    />
                  )
                )
              : null}
          </MessagesContainer>
        </MessagesWrapper>
      ) : (
        <UserDetailsModal createThread={createThread} />
      )}
      {!isFirstTime ? (
        <TextArea postMessage={postMessage} showAlert={showAlert} />
      ) : null}
    </ChatContainer>
  );
}
