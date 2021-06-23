export const getTodosState = (store) => store.todos;

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store).todos : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).todos[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id));
