import { useState } from "react";
import { Button, InputContainer } from "./styled";
export default function UserDetailsModal({ submitUserDetails }) {
  const [name, setName] = useState("");
  function handleubmitUserDetails() {
    if (name.length) {
      submitUserDetails(name);
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
      <Button onClick={handleubmitUserDetails}>Continue</Button>
    </InputContainer>
  );
}
