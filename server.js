const express = require("express");
const cors = require("cors");

const app = express();

// //whitelisting 8081
// var corsOptions = {
//   origin: "https://localhost:8080",
// };

// // middleware
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/productRouter");
app.use("/api/products", router);

// testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

//port

const PORT = process.env.PORT || 8080;

// server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
