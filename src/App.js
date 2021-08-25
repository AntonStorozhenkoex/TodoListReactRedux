import { Header } from "./components/todoList/Header";
import { TodoList } from "./components/todoList/TodoList";
import { useSelector } from "react-redux";
import { getVisibleTodos } from "./redux/filter";
import "./index.css";

export const App = () => {
  const filter = useSelector((state) => state.visibilityFilter);
  const todos = useSelector((state) => state.todos);
  const visibleTodos = getVisibleTodos(todos, filter);
  console.log(todos);
  console.log(filter);
  return (
    <div className="App myApp">
      <Header />
      <TodoList filter={filter} todos={todos} visibleTodos={visibleTodos} />
    </div>
  );
};
