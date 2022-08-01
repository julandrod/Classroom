const { registerUser, loginUser } = require("../controllers/auth.controllers");

const router = require("express").Router();

// ruta "/api/v1/auth"

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
