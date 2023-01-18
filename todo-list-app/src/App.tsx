import "./App.css";
import TodoList from "./components/todo-list/todo-list";

function App() {
  return (
    <div className="App">
      Learn React 12s
      <TodoList items={[{ id: 1, title: "Задача", isChecked: false }]} />
    </div>
  );
}

export default App;
