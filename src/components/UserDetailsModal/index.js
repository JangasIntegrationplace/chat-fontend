import { useState } from "react";
import { Button, InputContainer } from "./styled";
export default function UserDetailsModal({ createThread }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  function handleubmitUserDetails() {
    if (name.length && email.length && topic.length) {
      createThread({
        name,
        topic,
        email,
      });
    }
  }
  return (
    <InputContainer>
      <h1>Please tell us your name.</h1>
      <input
        type="text"
        placeholder="first name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="topic"
        placeholder="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={handleubmitUserDetails}>Continue</Button>
    </InputContainer>
  );
}
