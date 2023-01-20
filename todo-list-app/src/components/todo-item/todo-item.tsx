import { FC, useState } from "react";
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
  const onCLick = () => setIsChecked((prevState) => !prevState);

  return (
    <div className={b()}>
      <CheckBox isChecked={isChecked} onClick={onCLick} />
      <span
        className={b("task-title", { checked: isChecked })}
        onClick={onCLick}
      >
        {props.title}
      </span>
    </div>
  );
};

export default TodoItem;
