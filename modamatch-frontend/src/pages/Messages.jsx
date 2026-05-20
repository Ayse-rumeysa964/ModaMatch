import "./Messages.css";

import { useEffect, useState } from "react";

function Messages() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    fetch(

      `http://localhost:5000/messages/${user.id}`

    )

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setMessages(data);

      });

  }, []);

  return (

    <div className="messages-page">

      <h1>
        Mesajlarım 💬
      </h1>

      <div className="messages-container">

        {messages.map((item) => (

          <div
            className="message-card"
            key={item.id}
          >

            <h2>
              {item.tailor_name}
            </h2>

            <p>
              {item.message}
            </p>

            <span>
              {item.created_at}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Messages;