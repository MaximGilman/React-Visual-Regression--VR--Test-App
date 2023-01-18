import React, { FC, useState } from "react";
import { block } from "bem-cn";
import "./check-box.css";

interface Props {
  isChecked: boolean;
  onClick: (currentIsChecked: boolean) => void;
}

const b = block("check-box");

const CheckBox: FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  React.useEffect(() => {
    setIsChecked(props.isChecked);
  }, [props.isChecked]);

  return (
    <div
      className={b({ checked: isChecked })}
      onClick={() => {
        setIsChecked(!isChecked);
        props.onClick(!isChecked);
        console.log(`changed ${isChecked}`);
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
