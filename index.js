//body = req.body,,, 
//url = req.params,,, 
//query string = req.query;
const express = require("express");
const app = express();

app.use(logger);
app.use(singleBook);
app.get("/books", (req, res) => {
    return res.send({ route: "/books" });
});
app.get("/book/:name", singleBook, (req, res) => {
    return res.send({ bookName: req.name });
})

function singleBook(req, res, next) {
    req.name = req.params.name;
    next();
}


function logger(req, res, next) {
    console.log("Fetching all books");
    next();
}

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
