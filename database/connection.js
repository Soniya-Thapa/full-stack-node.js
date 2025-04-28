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