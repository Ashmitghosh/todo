import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (todo.trim() === "" && time.trim() === "") {
      setError("Please enter task and time.");
    } else if (todo.trim() === "") {
      setError("Please enter task.");
    } else if (time.trim() === "") {
      setError("Please enter time.");
    } else {
      setTodoList([...todoList, { id: Date.now(), todoName: todo, time: time }]);
      setTodo("");
      setTime("");
      setError("");
    }
  };

  const deleteTodo = (deleteId) => {
    const restTodoList = todoList.filter((item) => item.id !== deleteId);
    setTodoList(restTodoList);
  };

  return (
    <div className="bg-gradient-to-r from-black min-h-screen flex items-center ">
      <div className="w-[500px] mx-auto text-center bg-gradient-to-r from-black p-5 rounded-lg shadow-md shadow-cyan-200">
        <h1 className="text-5xl text-stone-50 font-serif mb-8">TO._.DO</h1>
        <form onSubmit={handleForm} className="mb-8">
          <input
            className={`border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-3 text-black ${error ? 'border-red-500' : ''}`}
            type="text"
            placeholder="Add Task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Select time:</label>
          <input
            type="time"
            id="time"
            className="bg-white border leading-none border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            />
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Add
          </button>
        </form>
        {error && <p className="text-orange-300">{error}</p>}
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo) => (
              <li
                key={singleTodo.id}
                className="bg-gradient-to-r from-black mb-5 flex justify-between items-center text-white py-5 rounded-lg text-3xl px-5 shadow-md shadow-cyan-200"
              >
                <div>
                  <p>{singleTodo.todoName}</p>
                  <p className="text-gray-200 text-base">{singleTodo.time}</p>
                </div>
                <span
                  onClick={() => deleteTodo(singleTodo.id)}
                  className="text-zinc-50 cursor-pointer"
                >
                  x
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
