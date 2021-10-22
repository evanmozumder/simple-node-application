const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("wow!  My second node project, i am excited");
});

const users = [
  {
    id: 1,
    name: "Evan",
    email: "evanmozumder5@gmail.com",
    phone: "01234244434",
  },
  {
    id: 2,
    name: "Shrabonti",
    email: "evanmozumder5@gmail.com",
    phone: "01234244434",
  },
  {
    id: 3,
    name: "Susmita",
    email: "evanmozumder5@gmail.com",
    phone: "01234244434",
  },
  {
    id: 4,
    name: "Ador",
    email: "evanmozumder5@gmail.com",
    phone: "01234244434",
  },
  {
    id: 5,
    name: "Asif",
    email: "evanmozumder5@gmail.com",
    phone: "01234244434",
  },
];

// search query implement
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
  res.send(users);
});

app.get("/fruits", (req, res) => {
  res.send();
});

// app.Method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send("post got hitted");
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const index = req.params.id;
  console.log(index);
  res.send(users.find((user) => user.id == index));
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy Yummy tok marka fazli");
});

app.listen(port, () => {
  console.log("Listening the port ", port);
});
