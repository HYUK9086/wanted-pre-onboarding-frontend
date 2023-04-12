import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../config/config";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

export default function SignIn() {
  const [userInfo, setUserInfo] = useState({ email: "", pw: "" });
  const navigate = useNavigate();

  const getUserInfo = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/todo");
  }, []);

  const goToSignUp = () => navigate("/signup");

  const goToTodo = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        `${BASE_URL}/auth/signin`,
        {
          email: userInfo.email,
          password: userInfo.pw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.status === 200) {
        const data = result.data;
        localStorage.setItem("token", data.access_token);
        navigate("/todo");
      }
    } catch (error) {
      console.error(error);
      alert("이이디 또는 비밀번호가 들렸습니다.");
    }
  };

  const regex = /^\S+@\S+$/;

  const isDisabled = regex.test(userInfo.email) && userInfo.pw.length > 7;

  return (
    <div className="login">
      <div className="header">로그인</div>
      <hr />
      <section className="container">
        <div className="loginGuide">
          <span>이메일로 로그인해주세요.</span>
        </div>
        <div className="loginWrap">
          <form>
            <input
              type="text"
              className="inputEmail"
              placeholder="이메일 입력"
              onChange={getUserInfo}
              name="email"
              data-testid="email-input"
            />
            <input
              type="password"
              className="inputPw"
              placeholder="비밀번호 입력 (8자이상)"
              onChange={getUserInfo}
              name="pw"
              data-testid="password-input"
            />
            <button
              type="button"
              className={isDisabled ? "loginBtn" : "disabledBtn"}
              onClick={goToTodo}
              disabled={!isDisabled}
              data-testid="signin-button"
            >
              로그인
            </button>
            <hr />
          </form>
          <button
            onClick={goToSignUp}
            className="joinMember"
            data-testid="signin-button"
          >
            <span>아직 회원이 아니세요?</span>
            <span> 회원가입</span>
          </button>
        </div>
      </section>
    </div>
  );
}