const express = require('express')
const app = express()
require("./database/connection") //./ = ma jaha xu , database = tyeha yo folder xa , / = tyo bhitra , connection = yo file xa 

app.get("/books",function(req,res){
  //logic to fetch books from database
  res.json({
    message : "books fetched successfully"
  })
})
app.post("/books",function(req,res){
  //logic to add books from database
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


// DATABASE_URL="postgresql://postgres.ydrmedmuipsjygecviqz:678788@Sss@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000")
})