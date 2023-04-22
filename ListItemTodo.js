import React, { useState } from "react";

const ListItemTodo = ({ todo, id, deleteData, updateData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [initialTodo, setinitialTodo] = useState({ todo: todo });

  function changeHandler(e) {
    setinitialTodo({ todo: e.target.value });
  }

  function switchEditBtn() {
    setIsEdit(!isEdit);
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
    updateData(id, initialTodo);
  }

  return (
    <li className="todo-item">
      <form className="form-edit" onSubmit={submitHandler}>
        {!isEdit ? (
          <input
            disabled
            type="text"
            className="input-no-border"
            value={initialTodo.todo}
            onChange={changeHandler}
          />
        ) : (
          <input
            type="text"
            className="input-with-border"
            value={initialTodo.todo}
            onChange={changeHandler}
          />
        )}
      </form>
      {!isEdit ? (
        <>
          <button
            className="btn btn__action btn__action-edit"
            onClick={switchEditBtn}
          >
            Edit
          </button>
          <button
            className="btn btn__action btn__action-delete"
            onClick={() => deleteData(id)}
          >
            Hapus
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn__action btn__action"
            onClick={submitHandler}
          >
            Simpan
          </button>
          <button
            className="btn btn__action btn__action-batal"
            onClick={switchEditBtn}
          >
            Batal
          </button>
        </>
      )}
    </li>
  );
};

export default ListItemTodo;
