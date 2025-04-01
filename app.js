const express = require("express");
const mongodb = require("mongodb");
//app
const app = express();

//to use client in app
const db = require("./server").db();

// 1 express kirish code  middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // traditional api
app.use(express.json()); // rest api

//2 sessions code
//3 views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4 routing code
//form in harid has action sending it to /create-item
app.post("/create-item", (req, res) => {
  const new_data = req.body.item;
  db.collection("plansCollection").insertOne(
    { item: new_data },
    (err, data) => {
      res.json(data.ops[0]);
    }
  );
});

//delete route
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plansCollection").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "succes" });
    }
  );
});
// clear all
app.post("/clear_all", (req, res) => {
  if (req.body.clear_all) {
    db.collection("plansCollection").deleteMany(() => {
      res.json({ state: "cleared all" });
    });
  }
});

//update_item
app.post("/edit-item", (req, res) => {
  const data = req.body.new_input;
  const id = req.body.id;
  db.collection("plansCollection").findOneAndUpdate(
    { _id: new mongodb.ObjectId(id) },
    { $set: { item: data } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

///main page rendering plan.ejs in views
app.get("/", (req, res) => {
  db.collection("plansCollection")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("plan", { items: data });
      }
    });
});
module.exports = app;

// why github commits are not showing up?
