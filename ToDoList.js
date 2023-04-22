import React, { useEffect, useState } from "react";
import FormAdd from "./FormAdd";
import axios from "axios";
import ListItemTodo from "./ListItemTodo";

const ToDoList = () => {
  const url = "http://localhost:5000/data";

  const [todos, setTodos] = useState([]);
  // GET ALL TODOS

  useEffect(() => {
    axios.get(url).then((res) => {
      try {
        // console.log(res.data);
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    });
  });

  function addTodo(todo) {
    return axios.post(url, todo);
  }

  function deleteTodo(id) {
    return axios.delete(`${url}/${id}`);
  }

  function updataTodo(id, todo) {
    return axios.put(`${url}/${id}`, todo);
  }

  return (
    <>
      <FormAdd addData={addTodo} />
      <ul>
        {todos
          .map((todo) => (
            <ListItemTodo
              deleteData={deleteTodo}
              updateData={updataTodo}
              todo={todo.todo}
              key={todo.id}
              id={todo.id}
            />
          ))
          .reverse()}
      </ul>
    </>
  );
};

export default ToDoList;
