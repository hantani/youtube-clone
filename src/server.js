import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I Still love you");
};

app.get("/", logger, handleHome);

const handleLogin = (req, res) => {
  return res.send("Login");
};
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);
