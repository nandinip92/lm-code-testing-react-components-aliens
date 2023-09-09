import React from "react";

interface TextAreaProps {
  reasonForSparring: string;
  onChangeReasonForSparring: (newValue: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  reasonForSparring,
  onChangeReasonForSparring,
}) => {
  return (
    <>
      <label className="tag" htmlFor="reasonForSparring">
        Reason For Sparring :
      </label>
      <textarea
        id="reasonForSparring"
        name="reasonForSparring"
        onChange={(event) => onChangeReasonForSparring(event?.target.value)}
      ></textarea>
    </>
  );
};

export default TextArea;
