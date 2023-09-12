import React from "react";
import { v4 as uuidv4 } from "uuid";

// export interface ErrorMessagesProps {
//   messages: Array<string>;
// }

const ErrorMessage: React.FC<{ messages: Array<string> }> = ({ messages }) => {
  const length = messages === undefined ? 0 : messages.length;
  return (
    <>
      {length > 0 &&
        messages.map((message) => (
          <p key={uuidv4()} className="error" data-testid="error">
            {message}
          </p>
        ))}
    </>
  );
};

export default ErrorMessage;
