import classNames from "classnames";
import { KeyboardEvent, useState } from "react";

interface InlineEditableInputProps {
  value?: string;
  className?: string;
  onChanged: (value?: string) => void;
}

const InlineEditableInput: React.FC<InlineEditableInputProps> = ({
  value,
  className,
  onChanged,
}) => {
  const [editValue, setEditValue] = useState(value);
  const [isEditable, setEditable] = useState(false);

  const onSubmit = () => {
    if (editValue) {
      onChanged(editValue);
      setEditable(false);
    }
  };

  const onBlur = () => onSubmit();
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return isEditable ? (
    <input
      autoFocus
      className={classNames(
        "w-full border-b-2 border-gray-300 focus:outline-none",
        className
      )}
      value={editValue}
      onChange={(event) => setEditValue(event.target.value)}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  ) : (
    <div
      className={classNames("cursor-pointer", className)}
      onClick={() => {
        setEditable(true);
      }}
    >
      {value}
    </div>
  );
};

export default InlineEditableInput;
