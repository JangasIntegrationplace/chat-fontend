import { useEffect, useState } from "react";
import "./App.css";
import ChatButton from "./components/ChatButton";
import Chat from "./layout/chat";
import styled from "styled-components";
import * as api from "./api";
import useSession from "./hooks/useSession";

const THREAD_TOKEN = "THREAD_TOKEN";
function App() {
  const [thread, setThread] = useSession(THREAD_TOKEN);
  const [conversation, setConversation] = useState([]);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  async function initializeChat() {
    setIsChatBoxOpen(true);
    if (thread) {
      retrieveThread(thread);
    } else {
      createThread();
    }
  }
  async function createThread(message) {
    const { success, data } = await api.createThread();
    if (!success) {
      console.log(data);
    } else {
      console.log(data);
      setThread(THREAD_TOKEN, data.id);
    }
  }
  async function retrieveThread() {
    const { success, data: conversationData } = await api.retrieveChatThread(
      thread
    );
    if (success) {
      setConversation(conversationData.messages);
    } else {
      console.log("Error: " + conversationData);
    }
  }
  async function postMessage(message) {
    const { success, data } = await api.postMessage({
      threadId: thread,
      message,
    });
    if (success) {
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
  @media screen and (max-width: 400px) {
    bottom: 10px;
    right: 10px;
  }
`;
export default App;
