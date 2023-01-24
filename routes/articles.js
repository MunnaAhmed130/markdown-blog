const express = require("express");
const router = express.Router();

// route
router.get("/new", (req, res) => {
    res.send("new articles");
});

module.exports = router;
