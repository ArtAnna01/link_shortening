import { useState } from "react";

function AuthPage({ handleSignIn, handleSignUp }) {
  const [data, setData] = useState({ username: "", password: "" });
  const [isSignIn, setIsSignIn] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <h1>{isSignIn ? "Sign in" : "Sign up"}</h1>
      {/* {emailDirty && emailError && <div>{emailError}</div>} */}
      <input
        className=""
        onChange={(e) => handleChange(e)}
        // onBlur={(e) => blurHandler(e)}
        value={data.username}
        name="username"
        type="text"
        placeholder="Enter your email..."
      />
      {/* {passwordError && passwordDirty && <div>{passwordError}</div>} */}
      <input
        onChange={(e) => handleChange(e)}
        // onBlur={(e) => blurHandler(e)}
        value={data.password}
        name="password"
        type="password"
        placeholder="Enter your password..."
      />
      <div className="flex flex-col">
        <button
          onClick={(e) =>
            isSignIn ? handleSignIn(e, data) : handleSignUp(e, data)
          }
        >
          {isSignIn ? "Sign in" : "Sing up"}
        </button>
        <button onClick={() => setIsSignIn((prev) => !prev)}>
          {isSignIn ? "Need account?" : "Already registered?"}
        </button>
      </div>
    </>
  );
}

export default AuthPage;
