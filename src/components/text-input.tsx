import React from "react";
import { Labels, labels } from "../data/inputfield-labels";

export interface TextInputProps {
  fieldId: string;
  fieldValue: string;
  onChangeFieldValue: (newValue: string) => void;
  validate: (newValue: string) => string[];
}

const TextInput: React.FC<TextInputProps> = ({
  fieldId,
  fieldValue,
  onChangeFieldValue,
  validate,
}) => {
  const fieldLabel = labels[fieldId as keyof Labels];
  return (
    <>
      <label className="tag" htmlFor={fieldId}>
        {fieldLabel}
      </label>
      <input
        id={fieldId}
        type="text"
        value={fieldValue}
        onChange={(event) => onChangeFieldValue(event.target.value)}
      />
    </>
  );
};

export default TextInput;
