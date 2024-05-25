import React, { useEffect, useState } from "react";
type Btn = {
  text: string;
  isValid?: boolean;
  onClick: () => void;
};

const Button = ({ text, isValid, onClick }: Btn) => {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleDisabled() {
    if (isValid) {
      setIsDisabled(false);
    } else if (isValid === undefined) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  useEffect(() => {
    handleDisabled();
  }, [isValid]);

  return (
    <button
      type="button"
      className={`${
        isValid === undefined
          ? "btn"
          : isValid
          ? "btn formbtn"
          : "btn formbtn--disable"
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
