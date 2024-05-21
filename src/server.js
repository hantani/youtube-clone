import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("I Still love you");
};
app.get("/", handleHome);

const handleLogin = (req, res) => {
  return res.send("Login");
};
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port htttp://localhost:${PORT}`);

app.listen(4000, handleListening);
