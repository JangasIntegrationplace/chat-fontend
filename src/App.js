import { useEffect, useState } from "react";
import "./App.css";
import ChatButton from "./components/ChatButton";
import Chat from "./layout/chat";
import styled from "styled-components";
import * as api from "./api";

function App() {
  const [thread, setThread] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  async function initializeChat() {
    setIsChatBoxOpen(true);
    const { success, data } = await api.createThread();
    if (!success) {
      console.log(data);
    } else {
      setThread(data.id);
      const { success, data: conversationData } = await api.retrieveChatThread(
        "5dc7f574-18a6-11ec-a578-0242ac1e0004"
      );
      if (success) {
        setConversation(conversationData.messages);
      } else {
        console.log("Error: " + conversationData);
      }
    }
  }
  async function postMessage(message) {
    const { success, data } = await api.postMessage({
      threadId: "5dc7f574-18a6-11ec-a578-0242ac1e0004",
      message,
    });
    if (success) {
      console.log(data);
      setConversation([
        ...conversation,
        {
          id: data.id,
          user: data.user,
          timestamp: data.timestamp,
          body: data.body,
          send_by_user: data.send_by_user,
          thread: data.thread,
        },
      ]);
    } else {
      console.log(data);
    }
  }
  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <AppContainer className="App">
      {isChatBoxOpen ? (
        <div className="position-br">
          <Chat
            closeChatBox={() => setIsChatBoxOpen(false)}
            conversation={conversation}
            postMessage={postMessage}
          />
        </div>
      ) : (
        <div onClick={initializeChat} className="position-br">
          <ChatButton />
        </div>
      )}
    </AppContainer>
  );
}
const AppContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
`;
export default App;
