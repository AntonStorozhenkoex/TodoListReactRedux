import React from "react";
import { deleteTodoAction } from "../../redux/todos/action";
import { useDispatch } from "react-redux";

export const BtnDelete = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="deleteButton"
      onClick={() => dispatch(deleteTodoAction(todo))}
    >
      X
    </button>
  );
};
