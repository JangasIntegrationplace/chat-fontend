import { useState } from "react";
import { TextField, SendButton, TextAreaContainer } from "./styled";
import SendIcon from "./send.svg";
export default function Index({ postMessage }) {
  const [message, setMessage] = useState("");
  function handlePostMessage() {
    // FIXME: use better validation
    if (message.length) {
      // postMessage(message);
      setMessage("");
    } else {
      console.log("failed to post message");
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
