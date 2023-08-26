import { useState, useEffect } from 'react'
import './App.css'
import Active from './Components/Active'
import All from './Components/All'
import Completed from './Components/Completed'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from './Components/Infomation'

function App() {
  const [list, setList] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [inputTask, setInputTask] = useState("");


  useEffect(() => {
    localStorage.setItem("inputTask", JSON.stringify(inputTask));
  }, [inputTask]);

  const handleAddTodo = (todo) => {
    const newTask = {
      id: Math.random(),
      todo: todo
    };
    setList([...list, newTask]);
    setInputTask('');
  };

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) =>
      todo.id !== id
    );

    setList(newList);
  };

  function changeHandle(e) {
    setInputTask(e.target.value)
  }

  function onClickHandle() {
    handleAddTodo(inputTask)
  }


  return (
    <div class="checkList">
      <BrowserRouter>
        <div class="body">
          <Information />
          <div class="myInput">
            <input type="text" placeholder="Add details" value={inputTask} onChange={changeHandle} />
            <button onClick={onClickHandle}>Add</button>
          </div>
          <div className="list-container">
            {list.map((todo) => (
              <div className="task" key={todo.id}>
                <input type="checkbox" />
                {todo.todo}
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/active" element={<Active />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div >
  )
}

export default App
