const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

router.get("/users", controller.getUsers);
router.post("/users", controller.createUser);
router.put("/users/:id", controller.updateUser);

module.exports = router;
