import { FC } from "react";
import { block } from "bem-cn";
import "./check-box.css";
import Checkmark from "../checkmark/checkmark";

interface Props {
  isChecked: boolean;
  onClick: (currentIsChecked: boolean) => void;
}

const b = block("check-box");

const CheckBox: FC<Props> = ({ isChecked, onClick }) => {
  return (
    <div
      className={b({ checked: isChecked })}
      onClick={() => onClick(isChecked)}
    >
      {isChecked && <Checkmark />}
    </div>
  );
};

export default CheckBox;
