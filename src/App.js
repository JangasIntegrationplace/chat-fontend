import { useEffect, useState, useRef } from "react";
import ChatButton from "./components/ChatButton";
import Chat from "./layout/chat";
import styled, { css } from "styled-components";
import * as api from "./api";
import Socket from "./api/socket";
import useSession from "./hooks/useSession";
import { Alert } from "./components/AlertModal/styled";

const THREAD_TOKEN = "THREAD_TOKEN";
const NAME = "NAME";
function App({ title, align, icon }) {
  let alertRef = useRef();
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [socket, setSocket] = useState();
  const [isLive, setIsLive] = useState(false);
  const [thread, setThread] = useSession(THREAD_TOKEN);
  const [name, setName] = useSession(NAME);
  const [conversation, setConversation] = useState([]);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [alert, setAlert] = useState({
    isError: true,
    message: "error",
  });
  function initSocket(thread) {
    const socketInstance = new Socket(
      process.env.REACT_APP_SOCKET_ENDPOINT + "/" + thread + "/"
    );
    setSocket(socketInstance);
    socketInstance.onOpen(() => showAlert("you have been put through"));
    socketInstance.onError((e) => {
      showAlert("can't connect to slack at the moment", true);
    });
    socketInstance.onMessage((e) => {
      const newMessage = JSON.parse(e.data);
      if (newMessage.id) {
        retrieveThread(thread);
      }
    });
  }
  async function initializeChat() {
    setIsChatBoxOpen(true);
    if (thread) {
      initSocket(thread);
      retrieveThread(thread);
      setIsLive(true);
    }
  }
  async function createThread(userData) {
    const { success, data: response } = await api.createThread(userData);
    if (!success) {
      showAlert(response.message, true);
    } else {
      setThread(THREAD_TOKEN, response.id);
      initSocket(response.id);
      retrieveThread(response.id);
      setIsLive(true);
    }
  }
  async function retrieveThread(threadId) {
    const { success, data: response } = await api.retrieveChatThread(
      thread || threadId
    );
    if (success) {
      setConversation(response.messages);
    } else {
      showAlert(response.message, true);
    }
  }
  async function postMessage(message) {
    const { success, data: response } = await api.postMessage({
      threadId: thread,
      message,
      userData: JSON.parse(name),
    });
    if (!success) {
      showAlert(response.message, true);
    }
  }
  function showAlert(message, isError = false) {
    if (alertRef.current) {
      setAlert({
        message,
        isError,
      });
      alertRef.current && alertRef.current.classList.add("show");
      setTimeout(() => {
        alertRef.current && alertRef.current.classList.remove("show");
        setAlert({
          message: "",
          isError: false,
        });
      }, 3000);
    }
  }
  function handleCreateThread(userData) {
    setName(NAME, JSON.stringify(userData));
    createThread(userData);
    setIsFirstTime(false);
  }
  useEffect(() => {
    if (!name) {
      setIsFirstTime(true);
    }
  }, [name]);
  return (
    <AppContainer className="App" alignLeft={align === "left" ? true : false}>
      {isChatBoxOpen ? (
        <div className={"position-br"}>
          <Alert error={alert.isError} ref={alertRef}>
            {alert.message}
          </Alert>
          <Chat
            closeChatBox={() => {
              setIsChatBoxOpen(false);
              socket.close();
            }}
            conversation={conversation}
            postMessage={postMessage}
            showAlert={showAlert}
            isLive={isLive}
            createThread={handleCreateThread}
            isFirstTime={isFirstTime}
            title={title}
          />
        </div>
      ) : (
        <div onClick={initializeChat} className={"position-br"}>
          <ChatButton icon={icon} />
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
  .position-br {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media screen and (max-width: 400px) {
    bottom: 10px;
    right: 10px;
  }
  ${({ alignLeft }) =>
    alignLeft &&
    css`
      left: 50px;
      .position-br {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      @media screen and (max-width: 400px) {
        bottom: 10px;
        left: 10px;
      }
    `}
`;

export default App;
