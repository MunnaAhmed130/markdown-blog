const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog");

// This assumes a views directory containing an index.ejs page
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
    const articles = [
        {
            title: "Test Artcle",
            createdAt: new Date(),
            description: "Test description",
        },
        {
            title: "Test Artcle 2",
            createdAt: new Date(),
            description: "Test description 2",
        },
    ];
    // location of rendered page
    res.render("articles/index", { articles: articles });
});

app.listen(5000);
