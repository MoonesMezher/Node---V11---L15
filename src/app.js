// setup
require("dotenv").config()
const express = require("express");
const app = express();

// export
const morgan = require("morgan");
const notFound = require("./middlewares/notFound");
const connect = require("./utils/connect");

// pre middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/posts", require("./routes/posts.routes"));
app.use("/api/categories", require("./routes/categories.routes"));

// post middlewares
app.use(notFound);

// listen
connect(app);