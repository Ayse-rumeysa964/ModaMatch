import "./Home.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import hero from "../assets/modamatch.jpeg";

import tailor1 from "../assets/tailor1.jpeg";
import tailor2 from "../assets/tailor2.jpeg";

function Home() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [tailors, setTailors] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/tailors")

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setTailors(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <div className="home-container">

      {/* HEADER */}
      <header className="header">

        <div className="menu-icon">
          ☰
        </div>

        <h1 className="logo">

          {user
            ? `Hoşgeldin ${user.name} `
            : "ModaMatch"}

        </h1>

        <div

          className="notification"

          onClick={() => {

            localStorage.removeItem("user");

            navigate("/login");

          }}

        >

          Çıkış Yap

        </div>

      </header>

      {/* SEARCH */}
      <div className="search-wrapper">

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Ne aramıştınız?"
          />

          <span>⚙️</span>

        </div>

      </div>

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-left">

          <h2>
            Tarzınla <br />
            Eşleşen <br />
            Fırsatları <span>Keşfet!</span>
          </h2>

          <p>
            Binlerce terzi ve tasarımcı seni bekliyor.
          </p>

          <button onClick={() => navigate("/explore")}>
            Hemen Keşfet
          </button>

        </div>

        <div className="hero-right">

          <img src={hero} alt="" />

        </div>

      </section>

      {/* QUICK MENU */}
      <section className="quick-menu">

        <div
          className="menu-card"
          onClick={() => navigate("/explore")}
        >
          🔍
          <p>Terzi Ara</p>
        </div>

        <div
          className="menu-card"
          onClick={() => navigate("/analysis")}
        >
          📏
          <p>Ölçü Rehberi</p>
        </div>

        <div
          className="menu-card"
          onClick={() => navigate("/profile")}
        >
          ❤️
          <p>Favorilerim</p>
        </div>

        <div
          className="menu-card"
          onClick={() => navigate("/messages")}
        >
          💬
          <p>Mesajlarım</p>
        </div>

        <div
          className="menu-card"
          onClick={() => navigate("/profile")}
        >
          👤
          <p>Profilim</p>
        </div>

      </section>

      {/* TERZİLER */}
      <section className="tailor-section">

        <div className="section-header">

          <h2>
            Terzi Önerileri
          </h2>

          <span>
            Tümünü Gör →
          </span>

        </div>

        <div className="tailor-grid">

          {tailors.map((tailor) => (

            <div

  className="tailor-card"

  key={tailor.id}

  onClick={() => {

    navigate(`/tailor/${tailor.id}`);

  }}

>

              <img

                src={
                  tailor.id === 1
                    ? tailor1
                    : tailor2
                }

                alt=""

              />

              <div className="tailor-info">

                <h3>
                  {tailor.name}
                </h3>

                <p>
                  ⭐ {tailor.rating}
                </p>

                <span>
                  📍 {tailor.district}, {tailor.city}
                </span>

                <p>
                  {tailor.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">

        <div onClick={() => navigate("/")}>
          Ana Sayfa
        </div>

        <div onClick={() => navigate("/messages")}>
          Mesajlar
        </div>

        <div
          className="plus-btn"
          onClick={() => navigate("/analysis")}
        >
          +
        </div>

        <div onClick={() => navigate("/explore")}>
          Siparişler
        </div>

        <div onClick={() => navigate("/profile")}>
          Profil
        </div>

      </nav>

    </div>

  );

}

export default Home;