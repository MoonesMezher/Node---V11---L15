const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller")
const asyncHandler = require("../utils/asyncHandler");
const id = require("../middlewares/id");

// CRUD
router.get("/", asyncHandler(categoriesController.getAll))

router.get("/:id", [id], asyncHandler(categoriesController.getOne))

router.post("/", asyncHandler(categoriesController.create))

router.put("/:id", asyncHandler(categoriesController.update))

router.delete("/:id", asyncHandler(categoriesController.remove))

module.exports = router;