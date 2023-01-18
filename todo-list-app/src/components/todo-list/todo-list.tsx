import React, { FC } from "react";
import "./todo-list.css";
import { block } from "bem-cn";
import { Task } from "../../models/task";
import TodoItem from "../todo-item/todo-item";

interface Props {
  items: Array<Task>;
}

const b = block("todo-list");
const TodoList: FC<Props> = ({ items }) => (
  <div className={b()}>
    {items.map((x) => (
      <TodoItem key={x.id} isChecked={x.isChecked} title={x.title} />
    ))}
  </div>
);

export default TodoList;
