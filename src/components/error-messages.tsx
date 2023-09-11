import React from "react";
import { v4 as uuidv4 } from "uuid";

// export interface ErrorMessagesProps {
//   messages: Array<string>;
// }

const ErrorMessage: React.FC<{ messages: Array<string> }> = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <p key={uuidv4()} className="error">
          {message}
        </p>
      ))}
    </>
  );
};

export default ErrorMessage;
