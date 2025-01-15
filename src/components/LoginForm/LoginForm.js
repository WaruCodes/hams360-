import React from "react";
import "./LoginForm.css";  
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className="login-form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <div className="button-group">
        <button>Sign in</button>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </div>
  );
}

export default LoginForm;
