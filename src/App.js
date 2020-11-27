import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useState = variable in react
  // useEffect = runs codes on a condition

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name."));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello {username}</h1>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            className="app__input"
            placeholder="Type a Message..."
            value={input}
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconBtn"
            disabled={!input}
            variant="outlined"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, data }) => (
          <Message key={id} username={username} message={data} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
