const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const asyncHandler = require("../utils/asyncHandler")
const auth = require("../middlewares/auth");

router.get("/me", [auth], asyncHandler(authController.me))

router.post("/login", asyncHandler(authController.login))

router.post("/signup", asyncHandler(authController.signup))

router.post("/logout", [auth], asyncHandler(authController.logout))

router.put("/profile", [auth], asyncHandler(authController.update))

module.exports = router;