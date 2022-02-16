import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            type="email"
            placeholder="please enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.vlaue)}
          />
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            placeholder="please enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.vlaue)}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
