import React from "react";
import ErrorMessage from "./error-messages";
export interface TextAreaProps {
  reasonForSparring: string;
  onChangeReasonForSparring: (newValue: string) => void;
  validate: (newValue: string) => string[];
}

const TextArea: React.FC<TextAreaProps> = ({
  reasonForSparring,
  onChangeReasonForSparring,
  validate,
}) => {
  const errorMessages = validate(reasonForSparring);

  return (
    <>
      <label className="tag" htmlFor="reasonForSparring">
        Reason For Sparring:
      </label>
      <textarea
        id="reasonForSparring"
        name="reasonForSparring"
        value={reasonForSparring}
        onChange={(event) => onChangeReasonForSparring(event?.target.value)}
      ></textarea>
      <ErrorMessage messages={errorMessages} />
    </>
  );
};

export default TextArea;
