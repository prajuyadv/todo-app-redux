import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("todos", todos);

  return (
    <div className="w-full max-w-md mx-auto mt-6 p-4 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-4">Todos</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 p-3 rounded-lg shadow-md"
          >
            <span className="text-white">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-200"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
