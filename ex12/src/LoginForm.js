import React, { useState, useRef } from 'react';
import './LoginForm.css'; 

const LoginForm = ({ onSubmit }) => {
  
  const usernameRef = useRef();
  const passwordRef = useRef();

 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  
  const handleSubmit = (e) => {
    e.preventDefault();  
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    onSubmit(formData);  
  };

  
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameRef}
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password-input">Password:</label>
        <input
          ref={passwordRef}
          id="password-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  );
};

export default LoginForm;
