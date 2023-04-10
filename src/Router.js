import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ToDo from "./pages/ToDo/ToDo";

const Router = () => {
  //const token = localStorage.getItem("token", undefined);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/signup"
    //       element={token ? <Navigate to="/todo" /> : <SignUp />}
    //     />
    //     <Route
    //       path="/"
    //       element={token ? <Navigate to="/todo" /> : <SignIn />}
    //     />
    //     <Route path="/todo" element={token ? <ToDo /> : <Navigate to="/" />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default Router;
