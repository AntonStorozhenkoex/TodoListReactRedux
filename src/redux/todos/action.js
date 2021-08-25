import { v4 as uuidv4 } from "uuid";

export const toggleTodoAction = (todo) => ({
  type: "TOGGLE_TODO",
  id: todo.id,
});

export const deleteTodoAction = (todo) => ({
  type: "DELETE_TODO",
  id: todo.id,
});

export const addTodoAction = (inputValue) => ({
  type: "ADD_TODO",
  id: uuidv4(),
  value: inputValue,
});
export const deleteAllTodo = (todos) => ({
  type: "DELETE_ALL_TODO",
  id: todos.id,
});
