import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  let card;
  if (isUser) {
    card = (
      <Typography color="textPrimary" component="h2" variant="h5">
        {message.message}
      </Typography>
    );
  } else {
    card = (
      <>
        <Typography color="textSecondary" component="p" variant="p">
          {!isUser && `${message.username || "Unknown??"}`}
        </Typography>
        <Typography color="textPrimary" component="h2" variant="h5">
          {message.message}
        </Typography>
      </>
    );
  }
  return (
    <Card
      ref={ref}
      className={isUser ? "message__userCard" : "message__guestCard"}
    >
      <CardContent>{card}</CardContent>
    </Card>
  );
});

export default Message;
