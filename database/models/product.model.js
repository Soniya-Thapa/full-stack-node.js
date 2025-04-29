

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