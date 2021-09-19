import { useEffect, useRef, useState } from "react";
import MessageBox from "../../components/MessageBox";
import { ChatContainer, MessagesContainer, MessagesWrapper } from "./styled";
import ChatHeader from "../../components/ChatHeader";
import TextArea from "../../components/TextArea";
import _ from "lodash";
import UserDetailsModal from "../../components/UserDetailsModal";
import useSession from "../../hooks/useSession";

const NAME = "NAME";
export default function Chat({
  closeChatBox,
  conversation,
  postMessage,
  showAlert,
  isLive,
  createThread,
  isFirstTime,
}) {
  let messageContainer = useRef(null);
  const [username, setUsername] = useSession(NAME);
  function handleSubmitUserDetails(name) {
    setUsername(NAME, name);
    // setIsFirstTime(false);
  }
  useEffect(() => {
    if (messageContainer && !isFirstTime) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
    // if (!username) {
    // setIsFirstTime(true);
    // }
  }, []);
  useEffect(() => {
    if (messageContainer && !isFirstTime) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [conversation]);
  return (
    <ChatContainer>
      <ChatHeader closeChatBox={closeChatBox} />
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
