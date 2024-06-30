const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
