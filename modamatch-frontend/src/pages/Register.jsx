import "./Register.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import welcomeImage from "../assets/modamatchhosgeldin.jpeg";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div className="register-page">

      <div className="register-card">

        {/* IMAGE */}
        <img
          src={welcomeImage}
          alt=""
          className="welcome-image"
        />

        {/* NAME */}
        <div className="input-box">

          <input
            type="text"
            placeholder="İsim"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        {/* SURNAME */}
        <div className="input-box">

          <input
            type="text"
            placeholder="Soyisim"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

        </div>

        {/* PHONE */}
        <div className="input-box">

          <input
            type="text"
            placeholder="Telefon Numarası"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

        </div>

        {/* CITY */}
        <div className="input-box">

          <input
            type="text"
            placeholder="İl"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

        </div>

        {/* DISTRICT */}
        <div className="input-box">

          <input
            type="text"
            placeholder="İlçe"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />

        </div>

        {/* LOCATION */}
        <div className="input-box">

          <input
            type="text"
            placeholder="Konum"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

        </div>

        {/* ADDRESS */}
        <div className="input-box">

          <input
            type="text"
            placeholder="Adres"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

        </div>

        {/* EMAIL */}
        <div className="input-box">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        {/* PASSWORD */}
        <div className="input-box">

          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        {/* KVKK */}
        <div className="kvkk">

          <input type="checkbox" />

          <p>
            KVKK aydınlatma metnini kabul ediyorum.
          </p>

        </div>

        {/* BUTTON */}
        <button
          className="register-btn"
          onClick={() => {

            console.log("BUTTON ÇALIŞTI");

            fetch("http://localhost:5000/register", {

              method: "POST",

              headers: {
                "Content-Type": "application/json"
              },

              body: JSON.stringify({

                name,
                surname,
                phone,
                city,
                district,
                location,
                address,
                email,
                password

              })

            })
              .then((res) => res.json())

              .then((data) => {

                console.log(data);

                navigate("/login");

              });

          }}
        >
          ÜYE OL
        </button>

        {/* DIVIDER */}
        <div className="divider">
          veya
        </div>

        {/* GOOGLE */}
        <button className="google-btn">

          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt=""
          />

          GOOGLE İLE DEVAM ET

        </button>

        {/* LOGIN */}
        <div className="login-text">

          Zaten hesabın var mı?

          <span onClick={() => navigate("/login")}>
            GİRİŞ YAP
          </span>

        </div>

      </div>

    </div>
  );
}

export default Register;