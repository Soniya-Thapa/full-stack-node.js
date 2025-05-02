const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
  const datas = await books.findAll() //select *from books findAll()=>always returns array 
  //logic to fetch books from database
  res.json({
    message : "books fetched successfully",
    datas //alternate : datas :datas  only valid in js if the name of key and value are same
  })
}

exports.addBook = async function(req,res){
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
}

exports.deleteBook = function(req,res){ //id ley userley kun book delete garney bhanxa
  //logic to delete books from database
  res.json({
    message : "books deleted successfully"
  })
}

exports.editBook = function(req,res){ //id ley userley kun book update garney bhanxa
  //logic to update books from database
  res.json({
    message : "books updated successfully"
  })
}

exports.singleFetchBook = async function(req,res){
  //first capture what id he/she is sending
  const id = req.params.id  //(/books./id => yesko id ho)
  const datas = await books.findByPk(id) //always return object and findAll() => returns array
  res.json({
    message : "Single Book fetched successfully",
    datas
  })
}