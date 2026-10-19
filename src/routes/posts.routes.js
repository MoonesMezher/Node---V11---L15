const express = require("express");
const router = express.Router();
const postsControllers = require("../controllers/posts.controller");

router.get("/", postsControllers.getAll)

router.get("/:id", postsControllers.getOne)

router.post("/:userId", postsControllers.add)

router.put("/:id", postsControllers.update)

router.delete("/:id", postsControllers.remove)

module.exports = router;