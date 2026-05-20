import "./Explore.css";

import { useEffect, useState } from "react";

function Explore() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetch(

      `http://localhost:5000/orders/${user.id}`

    )

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setOrders(data);

      });

  }, []);

  return (

    <div className="explore-page">

      <h1>
        Randevularım 📅
      </h1>

      <div className="orders-container">

        {orders.map((item) => (

          <div
            className="order-card"
            key={item.id}
          >

            <h2>
              {item.tailor_name}
            </h2>

            <p>
              📅 Tarih:
              {item.order_date}
            </p>

            <p>
              ⏰ Saat:
              {item.order_time}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Explore;