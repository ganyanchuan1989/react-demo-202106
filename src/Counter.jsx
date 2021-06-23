import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, delTodo } from "./redux/actions/todos";

function Counter({ todos, addTodo, delTodo }) {
  const { data } = todos;
  return (
    <div>
      <div>
        <button
          onClick={() => {
            addTodo(uuidv4());
          }}
        >
          ADDfsss
        </button>
        <ul>
          {data &&
            data.map((item) => (
              <li
                key={item}
                onClick={() => {
                  delTodo(item);
                }}
              >
                {item} - deletess
              </li>
            ))}
        </ul>
        <input />
      </div>
    </div>
  );
}

export default connect(({ todos }) => ({ todos }), { addTodo, delTodo })(
  Counter
);
