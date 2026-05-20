import "./TailorDetail.css";

import { useParams } from "react-router-dom";
import { useState } from "react";

import tailor1 from "../assets/tailor1.jpeg";
import tailor2 from "../assets/tailor2.jpeg";

function TailorDetail() {

  const { id } = useParams();

  const [message, setMessage] = useState("");

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const tailor = {

    1: {

      name: "Mehmet Kara",

      city: "İstanbul",

      district: "Kadıköy",

      rating: "4.8",

      description:
        "Özel dikim erkek takım elbise uzmanı.",

      image: tailor1

    },

    2: {

      name: "Zeynep Aydın",

      city: "İstanbul",

      district: "Nişantaşı",

      rating: "4.9",

      description:
        "Kadın moda tasarım ve özel dikim uzmanı.",

      image: tailor2

    }

  }[id];

  return (

    <div className="detail-page">

      <div className="detail-card">

        <img
          src={tailor.image}
          alt=""
        />

        <h1>
          {tailor.name}
        </h1>

        <p>
          ⭐ {tailor.rating}
        </p>

        <p>
          📍 {tailor.district}, {tailor.city}
        </p>

        <p>
          {tailor.description}
        </p>

        {/* FAVORITE */}
        <button

          onClick={() => {

            const user = JSON.parse(
              localStorage.getItem("user")
            );

            fetch("http://localhost:5000/favorite", {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json"

              },

              body: JSON.stringify({

                user_id: user.id,

                tailor_id: id

              })

            })

              .then((res) => res.json())

              .then((data) => {

                alert(
                  "Favorilere eklendi 😄"
                );

                console.log(data);

              });

          }}

        >

          ❤️ Favorilere Ekle

        </button>

        {/* ORDER */}
        <div className="order-box">

          <h2>
            Randevu Oluştur 📅
          </h2>

          <input

            type="date"

            value={date}

            onChange={(e) => {

              setDate(e.target.value);

            }}

          />

          <input

            type="time"

            value={time}

            onChange={(e) => {

              setTime(e.target.value);

            }}

          />

          <button

            onClick={() => {

              const user = JSON.parse(

                localStorage.getItem("user")

              );

              fetch(

                "http://localhost:5000/order",

                {

                  method: "POST",

                  headers: {

                    "Content-Type":
                      "application/json"

                  },

                  body: JSON.stringify({

                    user_id: user.id,

                    tailor_id: id,

                    order_date: date,

                    order_time: time

                  })

                }

              )

                .then((res) => res.json())

                .then((data) => {

                  console.log(data);

                  alert(
                    "Randevu oluşturuldu 😄"
                  );

                  setDate("");
                  setTime("");

                });

            }}

          >

            Randevu Oluştur

          </button>

        </div>

        {/* MESSAGE */}
        <div className="message-box">

          <textarea

            placeholder="Mesajınızı yazın..."

            value={message}

            onChange={(e) => {

              setMessage(e.target.value);

            }}

          />

          <button

            onClick={() => {

              const user = JSON.parse(

                localStorage.getItem("user")

              );

              fetch(

                "http://localhost:5000/message",

                {

                  method: "POST",

                  headers: {

                    "Content-Type":
                      "application/json"

                  },

                  body: JSON.stringify({

                    sender_id: user.id,

                    tailor_id: id,

                    message: message

                  })

                }

              )

                .then((res) => res.json())

                .then((data) => {

                  console.log(data);

                  alert(
                    "Mesaj gönderildi 😄"
                  );

                  setMessage("");

                });

            }}

          >

            Mesaj Gönder

          </button>

        </div>

      </div>

    </div>

  );

}

export default TailorDetail;