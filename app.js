const express = require("express");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log("PORT from .env: ", process.env.PORT);

if (!process.env.PORT) {
  console.log(
    "Warning: PORT not set in environment variables. Using default port 3000."
  );
}

const path = require("path");

const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.on("send-location", (data) => {
    io.emit("receive-location", { id: socket.id, ...data });
  });
  console.log("connected");
});

io.on("disconnect", () => {
  io.emit("user-disconnected", { id: socket.id });
});
app.get("/", (req, res) => {
  res.render("index");
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
