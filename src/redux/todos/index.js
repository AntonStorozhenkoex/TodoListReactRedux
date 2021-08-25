import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, DELETE_ALL_TODO } from "./types";

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        value: action.value,
        isDone: false,
      };
    case DELETE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
      };
    case DELETE_ALL_TODO:
      if (state.id !== uuidv4()) {
        return state;
      }
      return {
        ...state,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        isDone: !state.isDone,
      };
    default:
      return state;
  }
};

export const todos = (
  state = [
    { id: uuidv4(), value: "Начать Todo", isDone: true },
    { id: uuidv4(), value: "Закончить Todo", isDone: false },
  ],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case DELETE_TODO:
      return state.filter((t) => t.id !== action.id);
    case TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    case DELETE_ALL_TODO:
      return state.filter((t) => t.id === uuidv4());
    default:
      return state;
  }
};
