import React from "react";
import Todo from "./Todo";

function TodoList({todos,filteredTodos, setTodos}) {
    return (
        <div className="todo-container">
          <ul className="todo-list">
       {filteredTodos.map((todo) => {
        return <Todo  todos={todos}   todo={todo} setTodos={setTodos}  key={todo.id} text={todo.text}/>; })}
          </ul>
      </div>
    );
}

export default TodoList;