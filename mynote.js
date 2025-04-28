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

/////////////////////////////////////////////////////////////////////////////////////////////////////

database : Connection.json
//hami yeha database connection ko code/logic lekhxau
const {Sequelize,DataTypes} = require("sequelize") //const bhitra k k halna milxa hernalai ctrl + space , ra {...} yo bhitra j pani lekhinxa tyo predefined hunxa, j pani lekna mildaina, ra yiniharu sequelize bhitra bata k k chainxa tyo kura ho ..

//alternate process 
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

// Sequelize = Class (blueprint =  naksha)
//class bata baneko ghar = class bata baneko object = yo process lai CI (class instantiation)

const sequelizeobj = new Sequelize("postgresql://postgres.ydrmedmuipsjygecviqz:@678788@123@@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") //connection string

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

const db = {}
db.Sequelize = Sequelize
db.sequelizeobj = sequelizeobj;

module.exports = db

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
