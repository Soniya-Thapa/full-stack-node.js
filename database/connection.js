//hami yeha database connection ko code/logic lekhxau
const {Sequelize,DataTypes} = require("sequelize") //const bhitra k k halna milxa hernalai ctrl + space , ra {...} yo bhitra j pani lekhinxa tyo predefined hunxa, j pani lekna mildaina, ra yiniharu sequelize bhitra bata k k chainxa tyo kura ho ..

const bookModel = require("./models/book.model")

// const userModel = require("./models/user.model")
// const productModel = require("./models/product.model")

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


// db.users=userModel(sequelizeobj,DataTypes)
// db.products=productModel(sequelizeobj,DataTypes)
//Alternate : require("./models/book.model")()

//this is the migrate code:
sequelizeobj.sync({force:false,alter : false}).then(()=>{
  console.log("migrate happened")
})

module.exports = db


