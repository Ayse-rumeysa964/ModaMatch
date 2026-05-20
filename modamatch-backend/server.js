const express = require("express");

const cors = require("cors");

const { Pool } = require("pg");

const app = express();

app.use(cors());

app.use(express.json());

/* DATABASE */

const pool = new Pool({

  user: "postgres",

  host: "localhost",

  database: "modamatch",

  password: "1",

  port: 5432,

});

/* TEST */

app.get("/", (req, res) => {

  res.send(
    "ModaMatch Backend Çalışıyor 🚀"
  );

});

/* REGISTER */
app.post("/register", async (req, res) => {

  const {

    name,
    surname,
    email,
    password,
    phone,
    city,
    district,
    address

  } = req.body;

  try {

    const result = await pool.query(

      `
      INSERT INTO users
      (name, surname, email, password, phone, city, district, address)

      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8)

      RETURNING *
      `,

      [

        name,
        surname,
        email,
        password,
        phone,
        city,
        district,
        address

      ]

    );

    res.json({

      message:
        "Kullanıcı oluşturuldu 🚀",

      user: result.rows[0]

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* LOGIN */
app.post("/login", async (req, res) => {

  const {

    email,
    password

  } = req.body;

  try {

    const result = await pool.query(

      `
      SELECT * FROM users
      WHERE email = $1
      AND password = $2
      `,

      [email, password]

    );

    if (result.rows.length > 0) {

      res.json({

        user: result.rows[0]

      });

    }

    else {

      res.status(401).json({

        message:
          "Email veya şifre yanlış"

      });

    }

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* TAILORS API */
app.get("/tailors", async (req, res) => {

  try {

    const result = await pool.query(

      `
      SELECT * FROM tailors
      `

    );

    res.json(result.rows);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* FAVORITE API */
app.post("/favorite", async (req, res) => {

  const {

    user_id,
    tailor_id

  } = req.body;

  try {

    await pool.query(

      `
      INSERT INTO favorites
      (user_id, tailor_id)

      VALUES
      ($1, $2)
      `,

      [
        user_id,
        tailor_id
      ]

    );

    res.json({

      message:
        "Favorilere eklendi 🚀"

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* GET FAVORITES */
app.get("/favorites/:userId", async (req, res) => {

  const { userId } = req.params;

  try {

    const result = await pool.query(

      `
      SELECT tailors.*

      FROM favorites

      JOIN tailors
      ON favorites.tailor_id = tailors.id

      WHERE favorites.user_id = $1
      `,

      [userId]

    );

    res.json(result.rows);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* MESSAGE API */
app.post("/message", async (req, res) => {

  const {

    sender_id,
    tailor_id,
    message

  } = req.body;

  try {

    await pool.query(

      `
      INSERT INTO messages
      (sender_id, tailor_id, message)

      VALUES
      ($1, $2, $3)
      `,

      [
        sender_id,
        tailor_id,
        message
      ]

    );

    res.json({

      message:
        "Mesaj gönderildi 🚀"

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* GET MESSAGES */
app.get("/messages/:userId", async (req, res) => {

  const { userId } = req.params;

  try {

    const result = await pool.query(

      `
      SELECT
        messages.*,
        tailors.name AS tailor_name

      FROM messages

      JOIN tailors
      ON messages.tailor_id = tailors.id

      WHERE messages.sender_id = $1

      ORDER BY messages.id DESC
      `,

      [userId]

    );

    res.json(result.rows);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* ORDER API */
app.post("/order", async (req, res) => {

  const {

    user_id,
    tailor_id,
    order_date,
    order_time

  } = req.body;

  try {

    await pool.query(

      `
      INSERT INTO orders
      (user_id, tailor_id, order_date, order_time)

      VALUES
      ($1, $2, $3, $4)
      `,

      [
        user_id,
        tailor_id,
        order_date,
        order_time
      ]

    );

    res.json({

      message:
        "Randevu oluşturuldu 🚀"

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* GET ORDERS */
app.get("/orders/:userId", async (req, res) => {

  const { userId } = req.params;

  try {

    const result = await pool.query(

      `
      SELECT
        orders.*,
        tailors.name AS tailor_name

      FROM orders

      JOIN tailors
      ON orders.tailor_id = tailors.id

      WHERE orders.user_id = $1

      ORDER BY orders.id DESC
      `,

      [userId]

    );

    res.json(result.rows);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Database hatası"

    });

  }

});

/* SERVER */

app.listen(5000, () => {

  console.log(
    "Server 5000 portunda çalışıyor 🚀"
  );

});