import React, { useState } from "react";

const FormAdd = ({ addData }) => {
  const [initialTodo, setinitialTodo] = useState({ todo: "" });

  function handlerChange(e) {
    setinitialTodo({ todo: e.target.value });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (initialTodo.todo !== "") {
      addData(initialTodo);
      setinitialTodo({ todo: "" });
    }
  }

  return (
    <form className="flex" onSubmit={handlerSubmit}>
      <input
        type="text"
        className="input-add"
        onChange={handlerChange}
        placeholder="Ketik Todo..."
        value={initialTodo.todo}
      />
      <button type="submit" className="btn btn__add">
        Add
      </button>
    </form>
  );
};

export default FormAdd;
