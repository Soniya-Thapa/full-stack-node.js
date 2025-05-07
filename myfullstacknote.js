// this file is only for my preferences and revision purposes:

const express = require('express')
const app = express()

app.get("/", (req, res) => { // /= api
  res.json({
    "name": "soniya"
  })
})
app.get("/about", (req, res) => { // /about= route ho api haina cause response json ma xaina
  res.send("about site")
})
app.get("/register", (req, res) => { 
  res.json({
    "username":"soniya"
  })
})
app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000")
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            APP.JS:

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
app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000")
})

/////////////////////////////////////////////////////////////////////////////////////////////////////

          DATABASE : Connection.js

//hami yeha database connection ko code/logic lekhxau
const {Sequelize,DataTypes} = require("sequelize") //const bhitra k k halna milxa hernalai ctrl + space , ra {...} yo bhitra j pani lekhinxa tyo predefined hunxa, j pani lekna mildaina, ra yiniharu sequelize bhitra bata k k chainxa tyo kura ho ..

const bookModel = require("./models/book.model")
const userModel = require("./models/user.model")
const productModel = require("./models/product.model")

//alternate process 
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

// Sequelize = Class (blueprint =  naksha)
//class bata baneko ghar = class bata baneko object = yo process lai CI (class instantiation)

const sequelizeobj = new Sequelize("postgresql://postgres.ydrmedmuipsjygecviqz:hello678788hello@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") //connection string

sequelizeobj.authenticate().then(()=>{
  console.log("Authentication successfull!")
})
.catch((err)=>{
  console.log("Error"+err)
})

// const info = {
//   name : "soniya"
// }
// info.age = 22
// class Car {
//   drive() {
//     console.log("Vroom!");
//   }
// }
// const myCar = new Car();
// myCar.drive(); // Vroom!

const db = {} //Instead of exporting Sequelize and sequelizeobj separately, you're putting them together into one db object.
db.Sequelize = Sequelize //key=value
db.sequelizeobj = sequelizeobj

db.books=bookModel(sequelizeobj,DataTypes)
db.users=userModel(sequelizeobj,DataTypes)
db.products=productModel(sequelizeobj,DataTypes)
//Alternate : require("./models/book.model")()

//this is the migrate code:
sequelizeobj.sync({force:false,alter : false}).then(()=>{
  console.log("migrate happened")
})

module.exports = db

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                TABLES CREATION:

USER TABLE:


const userModel = (sequelize,DataTypes)=>{
  const User = sequelize.define("user",{
    username :{
      type :DataTypes.STRING
    },
    password : {
      type:DataTypes.STRING,
    },
    email : {
      type : DataTypes.STRING
    }
  })
  return User
}
module.exports = userModel


BOOK TABLE:


//yeha book name ko table huna paryo ani tyeha bhitra column haru : bookname , bookprice, bookauthor, bookgenre huna paryo 
const bookModel = (sequelize,Datatypes)=>{ //bookModel = function ra yo function call huda above table ra column bannu paryo
  const Book = sequelize.define("book",{
    bookName :{
      type:Datatypes.STRING,
      allowNull : false
    },
    bookPrice:{
      type : Datatypes.INTEGER,
      allowNull : false
    },
    bookAuthor : {
      type : Datatypes.STRING,
      defaultValue : "Soniya Thapa"
    },
    bookGenre :{
      type:Datatypes.STRING
    }
  })
  return Book
}
module.exports = bookModel //export default bookModel


PRODUCT TABLE:



const productModel = (sequelize, DataTypes)=>{
  const Product = sequelize.define("product",{
    productName :{
      type :DataTypes.STRING,
    },
    productPrice :{
      type :DataTypes.FLOAT,
    }
  })
  return Product
}
module.exports=productModel

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

WE DID GET API AND POST API 
                            
                                  APP.JS

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

                            IN POSTMAN : JSON CODE FOR POST :

                            {
                              "bookName" : "C Programming",
                              "bookPrice" : 999,
                              "bookAuthor":"John Dae",
                              "bookGenre":"Programming"
                            }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                              app.js:

const express = require('express')
const bookRoute = require("./routes/book.route")

const app = express()
require("./database/connection") //./ = ma jaha xuuu, database = tyeha yo folder xa , / = tyo bhitra , connection = yo file xa 
app.use(express.json()) // yo code hanexi json data expressley bujhxa and postman bata post gareko json data dekhinxa 

app.use("",bookRoute)

//if:
// app.use("/api",bookRoute)
//localhost:3000/api/books

app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000")
})


                                                            bookcontroller.js


const { books } = require("../database/connection")

exports.fetchBooks = async function (req, res) {
  try {
    const datas = await books.findAll() //select *from books findAll()=>always returns array 
    //logic to fetch books from database
    res.json({
      message: "books fetched successfully",
      datas //alternate : datas :datas  only valid in js if the name of key and value are same
    })
  }
  catch {
    res.json({
      message: "error"

    })
  }
}

exports.addBook = async function (req, res) {
  try {
    console.log(req.body) //req.body => object
    //logic to add books from database
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body //this is destructor and can be only done with objects
    console.log(bookName)
    console.log(bookPrice)
    await books.create({
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre
    })
    res.json({
      message: "books added successfully"
    })
  } catch {
    res.json({
      message: "error"

    })
  }
}

exports.deleteBook = async function (req, res) { //id ley userley kun book delete garney bhanxa
  //logic to delete books from database
  //first ma hami kun book delete garna aateko ho tyesko id lim
  try {
    const id = req.params.id //const{id} = req.params => params ko satto body batalida nih hunxa req.body.id
    //id payepaxi tyo id ko book chai books tables bata uthdidim
    await books.destroy({
      where: {
        id //id : id
      }
    }) //delete from books where id = id
    res.json({
      message: "books deleted successfully"
    })
  }
  catch {
    res.json({
      message: "error"

    })
  }
}

exports.editBook = async function (req, res) { //id ley userley kun book update garney bhanxa
  try {
    //logic to update books from database
    //kun id ko chahi edit garney tyo id lina paryo
    const id = req.params.id
    //kk update garney ta 
    const { bookName, bookPrice, bookGenre, bookAuthor } = req.body
    await books.update({
      bookName, //bookName : bookName,
      bookPrice, //bookPrice:bookPrice,
      bookAuthor,  //bookAuthor:bookAuthor,
      bookGenre
    }, //bookGenre:bookGenre},
      {
        where:
        {
          id
        }
      })

    res.json({
      message: "books updated successfully"
    })
  }
  catch {
    res.json({
      message: "error"

    })
  }
}

exports.singleFetchBook = async function (req, res) {
  //first capture what id he/she is sending
  const id = req.params.id  //(/books./id => yesko id ho)
  const datas = await books.findByPk(id) //always return object and findAll() => returns array
  res.json({
    message: "Single Book fetched successfully",
    datas
  })
}


                                                      bookroute.js

const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/book.controller")
const { Connection } = require('pg')

const router = require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)

router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)

module.exports = router
// module.exports = {router} //{}=> taba matra halney jaba multiple lai export garna parxa  ra export garda direct exports.router = garera garna mildaina cause yeha hamley router ma aaru dherai kura thapera export garna parxa. yedi hami exports.router = yo garxam bhani hamro router ma append gareko kura export hudaina


                                                        bookModel.js


//yeha book name ko table huna paryo ani tyeha bhitra column haru : bookname , bookprice, bookauthor, bookgenre huna paryo 

const bookModel = (sequelize,Datatypes)=>{ //bookModel = function ra yo function call huda above table ra column bannu paryo
  const Book = sequelize.define("book",{
    bookName :{
      type:Datatypes.STRING,
      allowNull : false
    },
    bookPrice:{
      type : Datatypes.INTEGER,
      allowNull : false
    },
    bookAuthor : {
      type : Datatypes.STRING,
      defaultValue : "Soniya Thapa"
    },
    bookGenre :{
      type:Datatypes.STRING
    }
  })
  return Book
}
module.exports = bookModel //export default bookModel


                                                 Connection.js

//hami yeha database connection ko code/logic lekhxau
const {Sequelize,DataTypes} = require("sequelize") //const bhitra k k halna milxa hernalai ctrl + space , ra {...} yo bhitra j pani lekhinxa tyo predefined hunxa, j pani lekna mildaina, ra yiniharu sequelize bhitra bata k k chainxa tyo kura ho ..

const bookModel = require("./models/book.model")
const userModel = require("./models/user.model")
const productModel = require("./models/product.model")

//alternate process 
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

// Sequelize = Class (blueprint =  naksha)
//class bata baneko ghar = class bata baneko object = yo process lai CI (class instantiation)

const sequelizeobj = new Sequelize("postgresql://postgres.ydrmedmuipsjygecviqz:hello678788hello@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") //connection string

sequelizeobj.authenticate().then(()=>{
  console.log("Authentication successfull!")
})
.catch((err)=>{
  console.log("Error"+err)
})

//only for understanding purpose: 
// const info = {
//   name : "soniya"
// }
// info.age = 22
// class Car {
//   drive() {
//     console.log("Vroom!");
//   }
// }
// const myCar = new Car();
// myCar.drive(); // Vroom!

const db = {} //Instead of exporting Sequelize and sequelizeobj separately, you're putting them together into one db object.
db.Sequelize = Sequelize //key=value
db.sequelizeobj = sequelizeobj

db.books=bookModel(sequelizeobj,DataTypes)
db.users=userModel(sequelizeobj,DataTypes)
db.products=productModel(sequelizeobj,DataTypes)
//Alternate : require("./models/book.model")()

//this is the migrate code:
sequelizeobj.sync({force:false,alter : false}).then(()=>{
  console.log("migrate happened")
})

module.exports = db


