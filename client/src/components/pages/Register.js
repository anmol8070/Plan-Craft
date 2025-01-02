import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/authContext/authContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRegister = styled.div`
  background-color: #f8f9fa;
  color: #495057;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  h1 {
    color: #007bff;
    text-align: center;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
  .question {
    text-align: center;
    a {
      color: #007bff;
      text-decoration: none;
    }
    button.danger {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 8px 15px;
      margin-top: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const Register = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { registerUser, userAuth, errors, setError, clearError } = useContext(AuthContext);

  useEffect(() => {
    if (userAuth) {
      props.history.push('/')
    }
  }, [userAuth, props.history]);

  const { name, email, password, password2 } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    clearError();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError({ msg: "Passwords do not match" });
    } else {
      registerUser({ name, email, password });
      clearError();
    }
  }

  return (
    <StyledRegister>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        <input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={handleChange} />
        <input type="submit" value="Sign Up" />
      </form>
      <div className="question">
        {errors !== null && <button className="danger">
          {errors.msg ? errors.msg : errors.error[0].msg} <span onClick={() => clearError()}>X</span></button>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </StyledRegister>
  );
}

export default Register;
