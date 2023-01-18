import React, { FC } from "react";
import { block } from "bem-cn";
import "./check-box.css";

interface Props {
  isChecked: boolean;
  onClick: (currentIsChecked: boolean) => void;
}

const b = block("check-box");

const CheckBox: FC<Props> = ({ isChecked, onClick }) => {
  return (
    <div
      className={b({ isChecked: isChecked })}
      onClick={() => {
        onClick(!isChecked);
      }}
    >
      {/* <img
        src={checkmark}
        alt="checkmark"
        className={b("checkmark", { isChecked })}
      /> */}
    </div>
  );
};

export default CheckBox;
