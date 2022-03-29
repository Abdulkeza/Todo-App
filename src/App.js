import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App mt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="app-title ">My Todo</h1>

        <AddTodo />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
