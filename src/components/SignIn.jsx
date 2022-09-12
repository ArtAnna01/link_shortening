import React, { useEffect, useState } from "react";
// import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неккоректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 10) {
      setPasswordError("Пароль должен быть длиннее 6 и меньше 10");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const handleReg = (e) => {
    e.preventDefault();
    fetch(
      `http://79.143.31.216/register?username=${email}&password=${password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(console.log)
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <form>
          {emailDirty && emailError && <div>{emailError}</div>}
          <input
            className="w-"
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            value={email}
            name="email"
            type="text"
            placeholder="Enter your email..."
          />
          {passwordError && passwordDirty && <div>{passwordError}</div>}
          <input
            onChange={(e) => passwordHandler(e)}
            onBlur={(e) => blurHandler(e)}
            value={password}
            name="password"
            type="password"
            placeholder="Enter your password..."
          />
          <button
            disabled={!formValid}
            // onClick={(e) => {
            //   handleAuth(e);
            // }}
            // type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
