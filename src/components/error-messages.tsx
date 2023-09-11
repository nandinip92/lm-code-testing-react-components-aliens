import React from "react";

export interface ErrorMessagesProps {
  messages: Array<string>;
}

const ErrorMessage: React.FC<ErrorMessagesProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <p className="error">{message}</p>
      ))}
    </>
  );
};

export default ErrorMessage;
