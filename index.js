const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

const USERS = [
  {
    username: "george",
    name: "George Bluth",
    email: "george.bluth@reqres.in",
    profileImageURL: "https://reqres.in/img/faces/1-image.jpg",
    likesIcecream: true,
    hobbies: ["Swimming", "Dancing"],
  },
  {
    username: "janet",
    name: "Janet Weaver",
    email: "janet.weaver@reqres.in",
    profileImageURL: "https://reqres.in/img/faces/2-image.jpg",
    likesIcecream: false,
    hobbies: ["Swimming", "Singing", "Programming"],
  },
];

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/not-found", (req, res) => {
  res.sendFile(__dirname + "/not-found.html");
});

app.get("/users/:username", (req, res) => {
  const { username } = req.params;
  const userDetails = USERS.find((user) => user.username === username);
  if (userDetails) {
    res.render("user.ejs", userDetails);
  } else {
    res.redirect("/not-found");
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
