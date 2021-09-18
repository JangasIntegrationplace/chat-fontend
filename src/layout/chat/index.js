import { useEffect, useRef, useState } from "react";
import MessageBox from "../../components/MessageBox";
import { ChatContainer, MessagesContainer, MessagesWrapper } from "./styled";
import ChatHeader from "../../components/ChatHeader";
import TextArea from "../../components/TextArea";
import _ from "lodash";
import UserDetailsModal from "../../components/UserDetailsModal";
import useSession from "../../hooks/useSession";

const NAME = "NAME";
export default function Chat({ closeChatBox, conversation, postMessage }) {
  const [isFirstTime, setIsFirstTime] = useState(false);
  let messageContainer = useRef(null);
  const [username, setUsername] = useSession(NAME);
  function handleSubmitUserDetails(name) {
    setUsername(NAME, name);
    const message = "name: " + name;
    postMessage(message);
    setIsFirstTime(false);
  }
  useEffect(() => {
    if (messageContainer && !isFirstTime) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
    if (!username) {
      setIsFirstTime(true);
    }
  }, []);
  return (
    <ChatContainer>
      <ChatHeader closeChatBox={closeChatBox} />
      {!isFirstTime ? (
        <MessagesWrapper>
          <p className="start-text">This is the start of your converstion.</p>
          <MessagesContainer ref={(el) => (messageContainer = el)}>
            {_.orderBy(conversation, ["timestamp"], ["asc"]).map((message) => (
              <MessageBox
                key={message.id}
                isCustomerCare={!message.send_by_user}
                contents={message}
              />
            ))}
          </MessagesContainer>
        </MessagesWrapper>
      ) : (
        <UserDetailsModal submitUserDetails={handleSubmitUserDetails} />
      )}
      {!isFirstTime ? <TextArea postMessage={postMessage} /> : null}
    </ChatContainer>
  );
}
