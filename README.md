# 📀 wanted-pre-onboarding-frontend
wanted-pre-onboarding-frontend 선발과정 사전과제

<br />
<br/>

## 📣 project 실행방법
1. 프로젝트 패키지 설치

```
npm install
```

2. 프로젝트 실행

```
npm start
```

## 📣 project 배포링크
<a href="https://wanted-pre-onboarding-frontend-orcin.vercel.app/"> wanted-pre-onboarding-frontend 선발과정 사전과제 </a>

<br/>
<br/>

## 📣 기술스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/axios-purple?style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/React Router-CA4245?style=flat&amp;logo=ReactRouter&amp;logoColor=white" width="100" height="29"><img src="https://img.shields.io/badge/sass-CC6699?style=flat&logo=sass&logoColor=white" width="100" height="29"/>


<br/>
<br/>

## 📣 Project Todo List
회원가입, 로그인을 활용하여 유저별 todoList를 작성및 삭제기능을 구현하였습니다. 

<br />
<br/>

## 📣 File Tree

```
📦src
 ┣ 📂Styles
 ┃ ┣ 📜Common.scss
 ┃ ┣ 📜Reset.scss
 ┃ ┗ 📜Variables.scss
 ┣ 📂assets
 ┃ ┗ 📂button
 ┃ ┃ ┣ 📜actCommentBtn.png
 ┃ ┃ ┣ 📜comment.png
 ┃ ┃ ┣ 📜commentBtn.png
 ┃ ┃ ┣ 📜deleteTodo.png
 ┃ ┃ ┣ 📜liked.png
 ┃ ┃ ┣ 📜logoutImg.png
 ┃ ┃ ┗ 📜modify.png
 ┣ 📂config
 ┃ ┗ 📜config.jsx
 ┣ 📂pages
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📜SignIn.jsx
 ┃ ┃ ┗ 📜SignIn.scss
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📜SignUp.jsx
 ┃ ┃ ┗ 📜SignUp.scss
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📜EmptyTodo.jsx
 ┃ ┃ ┣ 📜EmptyTodo.scss
 ┃ ┃ ┣ 📜Todo.jsx
 ┃ ┃ ┣ 📜Todo.scss
 ┃ ┃ ┣ 📜TodoList.jsx
 ┃ ┃ ┗ 📜TodoList.scss
 ┣ 📜Router.js
 ┗ 📜index.js
 ```
 
 <br />
 <br/>
 
 ## 📣 페이지별 기능구현 영상
 
 <br />
 
 ### 👉 로그인
 #### ❗ 영상


https://user-images.githubusercontent.com/120013855/231967158-398dd3f7-51c3-468e-8232-1ecf259257df.mov


<br/>
 
 #### ❗ 구현사항<br/>
  1. 이메일 조건 '@'포함, 비밀번호 조건 8자 이상으로 유효성 검사를 통하여 로그인 버튼을 disabled 기능을 추가하였습니다.
  2. 아이디 또는 비밀번호가 틀렸을시 alret창을통하여 유저에게 오류내용을 전달하였습니다.
  3. login이 완료된 user(token이 있는user)면 바로 todo page로 연결되도록 구현하였습니다.
  
<br/>
<br/>

### 👉 회원가입
#### ❗ 영상


https://user-images.githubusercontent.com/120013855/231967036-a71b780c-03f7-4064-b744-4130791b5bc0.mov


<br/>

#### ❗ 구현사항<br/>
 1. 이메일 조건 '@'포함, 비밀번호 조건 8자 이상으로 유효성 검사를 통하여 회원가입 버튼을 disabled 기능을 추가하였습니다.
 2. user가 회원가입시 이메일에 정확하게 '@'가 포함되었는지 안내하기 위해 안내멘트를 출력하게 하였습니다.
 3. password도 마찬가지로 user가 정확하게 자신이 의도한대로 입력하였는 확인할 수 있게 안내멘트를 출력하였습니다.
 4. 회원가입 완료시 login page로 이동하게 구현하였습니다.
 5. login이 완료된 user(token이 있는user)면 바로 todo page로 연결되도록 구현하였습니다. 
  
<br/>
<br/>


### 👉 Todo List
#### ❗ 영상


https://user-images.githubusercontent.com/120013855/231968083-68346c67-26af-4cb1-8654-2b6738061ed0.mov


<br/>

#### ❗ 구현사항<br/>
1. logout이 완료된 user(token이 없는user)면 로그인페이지로 연결되도록 구현하였습니다.
2. 작성된 todolist가 없으면 user가 todo를 입력하도록 ui를 구성하였습니다.
3. todo입력 input창에 내용을 입력하면 todolist에 출력이되도록 구현하였습니다.
4. todo input창에 내용이 입력되야만 input button이 활성화 되도록 구현하였습니다.
5. todo의 checkbox가 체크되면 수정이 되지않게 수정버튼에 disabled를 추가 하였습니다.
6. 수정 button을 누르면 기존에 입력된 todo에 새로운 input창이 노출이되고 새로운 input창에서 todo를 수정할수 있게 구현하였습니다.
7. todo 내용을 수정후 다시 수정button을 누르면 수정한 새로운 todo가 출력이되게 구현하였습니다.
8. 취소button을 누르게 되면 이전에 입력된 todo가 출력이되도록 구현하였습니다.(todo 내용을 수정하였어도 취소버튼을 누르면 이전 todo내용이 출력)
