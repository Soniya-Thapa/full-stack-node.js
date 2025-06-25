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