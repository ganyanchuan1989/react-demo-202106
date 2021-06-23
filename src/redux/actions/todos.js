import { ADD_TODO, DEL_TODO } from "../actionTypes";

export const addTodo = (id) => ({
  type: ADD_TODO,
  payload: {
    id,
  },
});

export const delTodo = (id) => ({
  type: DEL_TODO,
  payload: { id },
});
