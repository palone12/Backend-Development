const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Msi ek badiya backend devlodsdpercsd ho!");
});
app.get("/need", (req, res) => {
  res.send("Pasia hai to $$$");
});
app.get("/final", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile("./Views/Home.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
