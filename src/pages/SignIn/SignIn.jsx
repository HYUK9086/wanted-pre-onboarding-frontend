import { useEffect } from "react";
import { useState } from "react";
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
    if (token) {
      navigate("/todo");
    }
  }, []);

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToToDo = () => {
    fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.pw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.access_token);
        if (data.access_token !== undefined) {
          navigate("/todo");
        } else {
          alert("이이디 또는 비밀번호가 들렸습니다.");
        }
      });
  };

  const regex = /^\S+@\S+$/;

  const isDisabled =
    regex.test(userInfo.email) === true && userInfo.pw.length > 7;

  return (
    <div className="login">
      <div className="header">로그인</div>
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
              onClick={goToToDo}
              disabled={isDisabled ? false : true}
              data-testid="signin-button"
            >
              로그인
            </button>
            <hr />
          </form>
          <button
            onClick={goToSignUp}
            className="joinMember"
            data-testid="signup-button"
          >
            <span>아직 회원이 아니세요?</span>
            <span> 회원가입</span>
          </button>
        </div>
      </section>
    </div>
  );
}
