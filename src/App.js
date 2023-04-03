import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: login, password: password })
    };
    fetch('/login', requestOptions)
      .then(response => response.json())
      .then(data => setData(data));
  };
  

  return (
    <div className="container">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Login"
          onChange={e => setLogin(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {data.length ? (
        <div>
          <p>Welcome {data.username}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default App;
