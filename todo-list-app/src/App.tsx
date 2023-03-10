import "./App.css";
import TodoList from "./components/todo-list/todo-list";
import { block } from "bem-cn";
import "@fontsource/rubik";

function App() {

  const b = block('app')
  return (
    <div className={b()}>
      <h1 className={b('header')}> Список дел</h1>
      <TodoList
        items={[
          { id: 1, title: "Задача простая", isChecked: false },
          { id: 2, title: "Добавить SVG галку", isChecked: false },
          { id: 3, title: "Сделать ДЗ по Solvery", isChecked: false },
          { id: 4, title: "Сделать ВР React App", isChecked: false },
          { id: 5, title: "Добавить адаптивную верстку", isChecked: false },
          { id: 6, title: "Добавить ресайз стилей", isChecked: false },
          { id: 7, title: "Добавить переменные в css", isChecked: false },
          { id: 8, title: "Добавить анимацию удаления строки с таймаутом", isChecked: false },
          { id: 9, title: "Добавить компоненты в сторибуки", isChecked: false },
        ]}
      />
    </div>
  );
}

export default App;
