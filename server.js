const express = require("express");
const http = require("http");

//app
const app = express();

// 1 express kirish code
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//2 sessions code
//3 views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4 routing code
app.get("/", (req, res) => {
  res.end("<h1>Welcome to Main page</h1>");
});

app.get("/about", (req, res) => {
  res.end("<h1>this is about page!</h1>");
});

//creating server
let PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`this app is running in port: ${PORT}`);
});
