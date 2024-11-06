import React, { useState } from 'react';

const AuthForm = ({ title, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ email, password });
  // };
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Pasword"
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={() => onSubmit({ email, password })}>Signup</button>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default AuthForm;