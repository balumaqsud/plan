const express = require("express");

console.log("app started");

//app
const app = express();

//to use client in app
const db = require("./server").db();

// 1 express kirish code
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//2 sessions code
//3 views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4 routing code
//form in harid has action sending it to /create-item
app.post("/create-item", (req, res) => {
  res.json({ test: "success" });
});

///main page rendering plan.ejs in views
app.get("/", (req, res) => {
  res.render("plan");
});

module.exports = app;
