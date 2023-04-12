import { useState } from "react";
import { useEffect } from "react";
import BASE_URL from "../../config/config";
import axios from "axios";
import "./TodoList.scss";

export default function TodoList({ todoList, setTodoList, todo }) {
  const [isComplete, setIsComplete] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEditing, setIsEditing] = useState(null);
  const [editingTodo, setEditingTodo] = useState("");

  const updateTodo = async (id, text) => {
    try {
      const access_token = localStorage.getItem("token");
      const result = await axios.put(
        `${BASE_URL}/todos/${id}`,
        {
          todo: text,
          isCompleted: false,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (result.status === 200) {
        setTodoList((prevTodos) =>
          prevTodos.map((todo) => {
            if (todo.id === id) {
              todo.todo = text;
            }
            return todo;
          })
        );
        setIsEditing(null);
        setEditingTodo("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getEditTodo = (e) => setEditingTodo(e.target.value);

  const handleEditTodoCancel = () => {
    setIsEditing(null);
    setEditingTodo("");
  };

  const editTodoSubmit = async (e) => {
    e.preventDefault();
    const isTodoValid = editingTodo.trim().length > 0;
    if (isTodoValid) updateTodo(isEditing, editingTodo);
  };

  const checkTodo = (e) => setIsComplete(e.target.checked);

  useEffect(() => setIsDisabled(!isComplete), [isComplete]);

  const deleteTodoHandle = (id) => {
    const access_token = localStorage.getItem("token");
    axios
      .delete(`${BASE_URL}/todos/${id}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((result) => {
        if (result.status === 204)
          setTodoList(todoList.filter((todo) => todo.id !== id));
      });
  };

  return (
    <li className="todosWrap">
      {isEditing !== todo.id ? (
        <div className="todoWrap">
          <label className="todoInfo">
            <input
              className="completeCheckBox"
              type="checkbox"
              value={isComplete}
              onChange={checkTodo}
            />
            <span className="todo">{todo.todo}</span>
          </label>
          <div className="btnWrap">
            <button
              disabled={!isDisabled}
              className={isDisabled ? "modifyTodo" : "disTodoModify"}
              data-testid="modify-button"
              onClick={() => {
                setIsEditing(todo.id);
                setEditingTodo(todo.todo);
              }}
            >
              수정
            </button>
            <button
              className="deletTodo"
              data-testid="delete-button"
              onClick={() => deleteTodoHandle(todo.id)}
            >
              삭제
            </button>
          </div>
        </div>
      ) : (
        <form className="modifyWrap" onSubmit={editTodoSubmit}>
          <input
            className="modifyInput"
            type="text"
            data-testid="modify-input"
            value={editingTodo}
            onChange={getEditTodo}
          />
          <div className="modifyBtnWrap">
            <button
              className="modifyBtn"
              type="submit"
              data-testid="submit-button"
            >
              수정
            </button>
            <button
              className="cancelBtn"
              type="button"
              data-testid="cancel-button"
              onClick={handleEditTodoCancel}
            >
              취소
            </button>
          </div>
        </form>
      )}
    </li>
  );
}
