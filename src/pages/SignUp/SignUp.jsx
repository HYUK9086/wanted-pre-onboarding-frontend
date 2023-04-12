import { useEffect } from "react";
import { useState } from "react";
import BASE_URL from "../../config/config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";

export default function SignUp() {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    pw: "",
    checkPw: "",
  });

  const navigate = useNavigate();

  const getSignupInfo = (event) => {
    const { name, value } = event.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/todo");
  }, []);

  const goToMain = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${BASE_URL}/auth/signup`,
        {
          password: signupInfo.pw,
          email: signupInfo.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.status === 201) navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
      alert("이미 등록된 이메일 입니다.");
    }
  };

  const waringPw = () => {
    if (
      signupInfo.pw === signupInfo.checkPw &&
      signupInfo.checkPw.length > 0 &&
      signupInfo.pw.length > 0
    ) {
      return "비밀번호 일치";
    } else if (signupInfo.pw !== signupInfo.checkPw) {
      return "비밀번호가 일치하지 않습니다.";
    } else if (signupInfo.checkPw.length < 0 && signupInfo.pw.length < 0) {
      return null;
    }
  };

  const waringEmail = () => {
    if (
      regexEmail.test(signupInfo.email) === false &&
      signupInfo.email.length > 0
    ) {
      return "이메일 형식이 올바르지 않습니다.";
    } else if (regexEmail.test(signupInfo.email) === true) {
      return "형식에 맞는 이메일주소 입니다.";
    } else if (signupInfo.email.length === 0) {
      return null;
    }
  };

  const regexEmail = /^\S+@\S+$/;

  const isDisabledJoin =
    signupInfo.pw.length >= 8 &&
    signupInfo.pw === signupInfo.checkPw &&
    regexEmail.test(signupInfo.email) === true;

  return (
    <div className="signup">
      <div className="header">아이디 등록</div>
      <hr />
      <div className="container">
        <div className="signupGuide">회원가입 정보를 입력 해 주세요</div>
        <div className="userInfo">
          <input
            className="email"
            type="text"
            placeholder="이메일"
            onChange={getSignupInfo}
            name="email"
            data-testid="email-input"
          />
          <p
            className={
              regexEmail.test(signupInfo.email) === false
                ? "eRedMsg"
                : "eGreenMsg"
            }
          >
            {waringEmail()}
          </p>
          <input
            type="password"
            placeholder="비밀번호 (8자 이상)"
            onChange={getSignupInfo}
            name="pw"
            data-testid="password-input"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            onChange={getSignupInfo}
            name="checkPw"
          />
          <p
            className={
              signupInfo.pw === signupInfo.checkPw ? "pwGreenMsg" : "pwRedMsg"
            }
          >
            {waringPw()}
          </p>
        </div>
      </div>
      <span className="btnWarp">
        <Link to="/">
          <button className="exitSignup">다음에 하기</button>
        </Link>
        <button
          className={isDisabledJoin ? "button" : "disabledBtn"}
          disabled={isDisabledJoin ? false : true}
          data-testid="signup-button"
          onClick={goToMain}
        >
          회원가입
        </button>
      </span>
    </div>
  );
}
