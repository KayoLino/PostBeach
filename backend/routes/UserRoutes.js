const express = require("express");
const router = express.Router();

// Controller
const { register, login, getCurrentUser, update } = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation, loginvalidation, userUpdateValidation } = require("../middlewares/userValidation");
const authGuard = require('../middlewares/authGuard');
const { imageUpload } = require('../middlewares/imageUpload');

//Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginvalidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update);
module.exports = router;