const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my personal server");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "017809328400" },
  { id: 2, name: "sabnur", email: "sabnur@gmail.com", phone: "017809328400" },
  { id: 3, name: "bobita", email: "bobita@gmail.com", phone: "017809328400" },
  { id: 4, name: "trisa", email: "trisa@gmail.com", phone: "017809328400" },
  { id: 5, name: "alia", email: "alia@gmail.com", phone: "017809328400" },
  { id: 6, name: "mousumi", email: "mousumi@gmail.com", phone: "017809328400" },
  { id: 7, name: "bubli", email: "bubli@gmail.com", phone: "017809328400" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    // filter by search query parameter
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour sour fazle flavor");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
