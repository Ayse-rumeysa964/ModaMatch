import "./Login.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {

    fetch(

      "http://localhost:5000/login",

      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json"

        },

        body: JSON.stringify({

          email,
          password

        })

      }

    )

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        if (data.user) {

          localStorage.setItem(

            "user",

            JSON.stringify(data.user)

          );

          navigate("/");

        }

        else {

          alert(
            "Email veya şifre yanlış 😄"
          );

        }

      });

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>
          Giriş Yap 
        </h1>

        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e) => {

            setEmail(e.target.value);

          }}

        />

        <input

          type="password"

          placeholder="Şifre"

          value={password}

          onChange={(e) => {

            setPassword(e.target.value);

          }}

        />

        <button

          onClick={handleLogin}

        >

          Giriş Yap

        </button>

      </div>

    </div>

  );

}

export default Login;