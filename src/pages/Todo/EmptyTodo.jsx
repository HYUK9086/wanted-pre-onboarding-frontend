import "./EmptyTodo.scss";
import comment from "../../assets/button/comment.png";

export default function EmptyTodo() {
  return (
    <div className='allWrap'>
      <img className='todoimg' src={comment} alt="todo"></img>
      <h3 className='emptyTitle'>todo를 입력 해 주세요!</h3>
    </div>
  );
}
