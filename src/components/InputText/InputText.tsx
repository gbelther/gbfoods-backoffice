import { ChangeEvent } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import "./styles.scss";

type Props = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeValue?: (value: string) => void;
  disabled?: boolean;
  feedback?: {
    type: "success" | "error" | "info";
    message: string;
  };
};

const InputText = ({
  label = "",
  placeholder = "",
  value,
  onChange,
  onChangeValue,
  disabled = false,
  feedback,
  ...rest
}: Props) => {
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    onChangeValue && onChangeValue(event.target.value);
  };

  return (
    <div {...rest} className="c-input-text">
      <label>{label}</label>
      <div className="c-input-text__input-wrapper">
        {feedback && (
          <div className="c-input-text__input-wrapper__icon-wrapper">
            {feedback?.type === "error" ? (
              <AiOutlineWarning color="#e60000" />
            ) : (
              <AiOutlineCheckCircle color="#49d049" />
            )}
          </div>
        )}
        <input
          type="text"
          className={`c-input-text__input-wrapper--input ${
            feedback && `c-input-text__input-wrapper--input-${feedback.type}`
          }`}
          placeholder={placeholder}
          value={value}
          onChange={handleValueChange}
          disabled={disabled}
        />
      </div>
      {!!feedback && (
        <p
          className={`c-input-text--feedback c-input-text--feedback-${
            feedback.type ?? "error"
          }`}
        >
          {feedback.message}
        </p>
      )}
    </div>
  );
};

export default InputText;
