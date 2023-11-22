const express = require("express");
const route = express.Router();
const User = require("../controller/userController");
route.post("/", User.createUser);
route.get("/", async(req, res) => {
    res.status(200).json("success")
});

module.exports = route;
