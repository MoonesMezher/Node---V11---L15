// setup
require("dotenv").config()
const express = require("express");
const app = express();

// export
const morgan = require("morgan");
const notFound = require("./middlewares/notFound");

// pre middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/posts", require("./routes/posts.routes"));

// post middlewares
app.use(notFound);

// listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server is Running")
});