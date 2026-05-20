import "./Profile.css";

import { useEffect, useState } from "react";

import tailor1 from "../assets/tailor1.jpeg";
import tailor2 from "../assets/tailor2.jpeg";

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    fetch(

      `http://localhost:5000/favorites/${user.id}`

    )

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setFavorites(data);

      });

  }, []);

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-image">

          👤

        </div>

        <h1>

          {user?.name} {user?.surname}

        </h1>

        <p>

          📧 {user?.email}

        </p>

        <p>

          📱 {user?.phone}

        </p>

        <p>

          📍 {user?.city} / {user?.district}

        </p>

        <p>

          🏠 {user?.address}

        </p>

      </div>

      {/* FAVORITES */}
      <div className="favorites-section">

        <h2>
          Favori Terzilerim ❤️
        </h2>

        <div className="favorites-grid">

          {favorites.map((tailor) => (

            <div
              className="favorite-card"
              key={tailor.id}
            >

              <img

                src={
                  tailor.id === 1
                    ? tailor1
                    : tailor2
                }

                alt=""

              />

              <h3>
                {tailor.name}
              </h3>

              <p>
                ⭐ {tailor.rating}
              </p>

              <span>
                📍 {tailor.district}, {tailor.city}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Profile;