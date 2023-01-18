import React, { FC, useState } from "react";
import { block } from "bem-cn";
import "./todo-item.css";
import CheckBox from "../check-box/check-box";

interface TodoItemProps {
  isChecked: boolean;
  title: string;
}

const b = block("todo-item");
const TodoItem: FC<TodoItemProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);
 

  return (
    <div className={b()}>
      <CheckBox isChecked={isChecked} onClick={setIsChecked} />
      <span
        className={b("task-title", { checked: isChecked })}
        onClick={() => setIsChecked(!isChecked)}
      >
        {props.title}
      </span>
    </div>
  );
};

export default TodoItem;
