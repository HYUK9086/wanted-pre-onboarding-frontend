import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmptyTodo from "./EmptyTodo";
import TodoList from "./TodoList";
import logoutImg from "../../assets/button/logoutImg.png";
import commentBtn from "../../assets/button/commentBtn.png";
import actCommentBtn from "../../assets/button/actCommentBtn.png";
import "./Todo.scss";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }
  }, []);

  const getTodos = async () => {
    try {
      const access_token = localStorage.getItem("token");
      await axios
        .get("https://www.pre-onboarding-selection-task.shop/todos", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((result) => setTodoList(result.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async (newTodo) => {
    try {
      const access_token = localStorage.getItem("token");
      await axios
        .post(
          "https://www.pre-onboarding-selection-task.shop/todos",
          {
            todo: newTodo,
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((result) => {
          if (result.status === 201) {
            setTodoList([...todoList, result.data]);
            setTodo("");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    const isTodoValid = todo.trim().length > 0;
    if (isTodoValid) {
      createTodo(todo);
    }
  };

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="AllWarp">
      <div className="titleWrap">
        <h1 className="title">Todo List</h1>
        <div className="logoutWrap">
        <p className='logoutText'>로그아웃</p>
          <img
            className="logout"
            src={logoutImg}
            alt="logout"
            onClick={logout}
          />
        </div>
      </div>
      <hr className="hr" />
      <div className="todoAllWrap">
        <div className="todoListWrap">
          {todoList.length === 0 ? (
            <EmptyTodo />
          ) : (
            todoList.map((todo, id) => (
              <TodoList
                key={id}
                todoList={todoList}
                setTodoList={setTodoList}
                todo={todo}
                getTodos={getTodos}
              />
            ))
          )}
        </div>
        <div className="todoInputWrap">
          <input
            className="todoInput"
            placeholder=" Let's Do It !"
            value={todo}
            data-testid="new-todo-input"
            onChange={getTodo}
          />
          <button
            className="todoBtn"
            disabled={todo.length === 0}
            data-testid="new-todo-add-button"
            onClick={addTodo}
          >
            <img
              className={todo.length > 0 ? "todoBtnImg" : "disTodoBtnImg"}
              src={todo.length === 0 ? commentBtn : actCommentBtn}
              alt="todoSubmitBtn"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
