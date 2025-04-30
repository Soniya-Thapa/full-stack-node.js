const express = require('express')
const { books } = require('./database/connection')
const app = express()
require("./database/connection") //./ = ma jaha xu , database = tyeha yo folder xa , / = tyo bhitra , connection = yo file xa 
app.use(express.json()) // yo code hanexi json data expressley bujhxa and postman bata post gareko json data dekhinxa 

app.get("/books",async function(req,res){
  const datas = await books.findAll() //select *from books findAll()=>always returns array 
  //logic to fetch books from database
  res.json({
    message : "books fetched successfully",
    datas //alternate : datas :datas  only valid in js if the name of key and value are same
  })
})

app.post("/books",async function(req,res){
  console.log(req.body) //req.body => object
  //logic to add books from database
  const {bookName,bookPrice,bookAuthor,bookGenre} =req.body //this is destructor and can be only done with objects
  console.log(bookName)
  console.log(bookPrice)
  await books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre
  })
  res.json({
    message : "books added successfully"
  })
})

app.delete("/books/:id",function(req,res){ //id ley userley kun book delete garney bhanxa
  //logic to delete books from database
  res.json({
    message : "books deleted successfully"
  })
})
app.patch("/books/:id",function(req,res){ //id ley userley kun book update garney bhanxa
  //logic to update books from database
  res.json({
    message : "books updated successfully"
  })
})
app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000")
})