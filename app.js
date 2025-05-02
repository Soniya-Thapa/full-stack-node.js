const express = require('express')
const { books } = require('./database/connection')
const { fetchBooks, addBook, deleteBook, editBook } = require('./controllers/book.controller')
const app = express()
require("./database/connection") //./ = ma jaha xu , database = tyeha yo folder xa , / = tyo bhitra , connection = yo file xa 
app.use(express.json()) // yo code hanexi json data expressley bujhxa and postman bata post gareko json data dekhinxa 

app.get("/books",fetchBooks)

app.post("/books",addBook)

app.delete("/books/:id",deleteBook)
app.patch("/books/:id",editBook)
app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000")
})