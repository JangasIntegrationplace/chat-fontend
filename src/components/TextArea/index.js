import { useState } from "react";
import { TextField, SendButton, TextAreaContainer } from "./styled";
import SendIcon from "./send.svg";
export default function Index({ postMessage, showAlert }) {
  const [message, setMessage] = useState("");
  function handlePostMessage() {
    // FIXME: use better validation
    if (message.length) {
      postMessage(message);
      setMessage("");
    } else {
      showAlert("please write message ", true);
    }
  }
  return (
    <TextAreaContainer>
      <TextField
        placeholder="type something..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></TextField>

      <SendButton icon={SendIcon} onClick={handlePostMessage} />
    </TextAreaContainer>
  );
}
