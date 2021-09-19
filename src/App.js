import { useEffect, useState, useRef } from "react";
import ChatButton from "./components/ChatButton";
import Chat from "./layout/chat";
import styled, { css } from "styled-components";
import * as api from "./api";
import useSession from "./hooks/useSession";
import { Alert } from "./components/AlertModal/styled";

const THREAD_TOKEN = "THREAD_TOKEN";
function App() {
  let alertRef = useRef();
  const [thread, setThread] = useSession(THREAD_TOKEN);
  const [conversation, setConversation] = useState([]);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [alert, setAlert] = useState({
    isError: true,
    message: "error",
  });
  async function initializeChat() {
    setIsChatBoxOpen(true);
    if (thread) {
      retrieveThread(thread);
    } else {
      createThread();
    }
  }
  async function createThread() {
    const { success, data: response } = await api.createThread();
    if (!success) {
      console.log(response);
      showAlert(response.message, true);
    } else {
      setThread(THREAD_TOKEN, response.id);
    }
  }
  async function retrieveThread() {
    const { success, data: response } = await api.retrieveChatThread(thread);
    if (success) {
      setConversation(response.messages);
    } else {
      console.log("Error: " + response);
      showAlert(response.message, true);
    }
  }
  async function postMessage(message) {
    const { success, data: response } = await api.postMessage({
      threadId: thread,
      message,
    });
    if (success) {
      setConversation([
        ...conversation,
        {
          id: response.id,
          user: response.user,
          timestamp: response.timestamp,
          body: response.body,
          send_by_user: response.send_by_user,
          thread: response.thread,
        },
      ]);
    } else {
      console.log(response);
      showAlert(response.message, true);
    }
  }
  function showAlert(message, isError = false) {
    if (alertRef) {
      setAlert({
        message,
        isError,
      });
      alertRef.current.classList.add("show");
      setTimeout(() => {
        alertRef.current.classList.remove("show");
        setAlert({
          message: "",
          isError: false,
        });
      }, 3000);
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
          <Alert error={alert.isError} ref={alertRef}>
            {alert.message}
          </Alert>
          <Chat
            closeChatBox={() => setIsChatBoxOpen(false)}
            conversation={conversation}
            postMessage={postMessage}
            showAlert={showAlert}
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap");
  font-family: "Montserrat", sans-serif;
  text-align: center;
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
