const http = require("http");
const mongodb = require("mongodb");

//mongo connection
const MONGO_URL =
  "mongodb+srv://mypython25:zcMaVEXKA72lSUqO@mit.omrzr.mongodb.net/?retryWrites=true&w=majority&appName=MIT";

mongodb.connect(
  MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log(`this the error ${err}`);
    } else {
      console.log("mongo successfully connected");
      module.exports = client;
      let PORT = 3005;
      const app = require("./app");
      const server = http.createServer(app);
      server.listen(PORT, () => {
        console.log(`server is running in port ${PORT}`);
      });
    }
  }
);
