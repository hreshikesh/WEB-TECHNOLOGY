import { useState } from "react";
import "../App.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="card">
      <h3>Login Form</h3>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="output">
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Password:</strong> {submitted.password}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
