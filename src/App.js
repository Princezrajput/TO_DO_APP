import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todo, setTodo] = useState();
  const [todolist, setTodolist] = useState([]);

  const onTodoInputchange = (e) => {
    setTodo(e.target.value);
  };

  const onAddTodoclick = () => {
    setTodolist([...todolist, { id: uuid(), todo: todo, iscompleted: false }]);
    setTodo("");
  };

  const onDeleteClick = (id) => {
    const updatedTodolist = todolist.filter((todo) => todo.id !== id);
    setTodolist(updatedTodolist);
  };

  const onTodoCheckChange = (id) => {
    const updatedTodolist = todolist.map((todo) =>
      todo.id === id ? { ...todo, iscompleted: !todo.iscompleted } : todo
    );
    setTodolist(updatedTodolist);
  };

  return (
    <div className="App">
      <div>
        <h1>My Wishlist</h1>
        <input
          value={todo}
          onChange={onTodoInputchange}
          placeholder="Add Your Wishlist"
        />
        <button onClick={onAddTodoclick}>ADD</button>
      </div>

      <div>
        <div>
          {todolist?.length > 0 &&
            todolist.map((todo) => (
              <div key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.iscompleted}
                    onChange={() => onTodoCheckChange(todo.id)}
                  />
                  <span
                    style={{
                      textDecoration: todo.iscompleted
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {todo.todo}
                  </span>
                </label>
                <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
