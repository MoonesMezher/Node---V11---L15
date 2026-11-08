const express = require("express");
const router = express.Router();
const postsControllers = require("../controllers/posts.controller");
const asyncHandler = require("../utils/asyncHandler");

router.get("/", asyncHandler(postsControllers.getAll))

router.get("/:id", asyncHandler(postsControllers.getOne))

router.post("/:userId", asyncHandler(postsControllers.add))

router.put("/:id", asyncHandler(postsControllers.update))

router.delete("/:id", asyncHandler(postsControllers.remove))

module.exports = router;