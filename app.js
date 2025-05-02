const express = require('express')
const bookRoute = require("./routes/book.route")

const app = express()
require("./database/connection") //./ = ma jaha xu , database = tyeha yo folder xa , / = tyo bhitra , connection = yo file xa 
app.use(express.json()) // yo code hanexi json data expressley bujhxa and postman bata post gareko json data dekhinxa 

app.use("",bookRoute)

//if:
// app.use("/api",bookRoute)
//localhost:3000/api/books

app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000")
})