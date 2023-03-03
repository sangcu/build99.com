import classNames from "classnames";
import { ChangeEvent, KeyboardEvent, useState } from "react";

interface InlineEditableInputProps {
  value?: string;
  className?: string;
  onChanged: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InlineEditableInput: React.FC<InlineEditableInputProps> = ({
  value,
  className,
  onChanged,
}) => {
  const [isEditable, setEditable] = useState(false);
  const onBlur = () => setEditable(false);
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setEditable(false);
    }
  };

  return isEditable ? (
    <input
      autoFocus
      className={classNames(
        "w-full border-b-2 border-gray-300 focus:outline-none",
        className
      )}
      defaultValue={value}
      onChange={onChanged}
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
