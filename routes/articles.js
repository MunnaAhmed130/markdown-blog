const express = require("express");
const router = express.Router();

// route /article/new
router.get("/new", (req, res) => {
    // directory location in views
    res.render("articles/new");
});

router.post("/", (req, res) => {});

module.exports = router;
