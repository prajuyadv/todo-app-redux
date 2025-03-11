import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // Prevent empty todos
    dispatch(addTodo(input));
    setInput(""); // Clear input
  };

  return (
    <form 
      onSubmit={addTodoHandler} 
      className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      <input
        type="text"
        className="w-full md:w-auto bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-3 placeholder-gray-400"
        placeholder="Enter a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300 ease-in-out focus:ring-2 focus:ring-indigo-300 focus:outline-none"
      >
        ➕ Add Todo
      </button>
    </form>
  );
};

export default AddToDo;
