const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/book.controller")

const router = require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)

router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)

module.exports = router
// module.exports = {router} //{}=> taba matra halney jaba multiple lai export garna parxa  ra export garda direct exports.router 
// = garera garna mildaina cause yeha hamley router ma aaru dherai kura thapera export garna parxa. yedi hami exports.router 
// = yo garxam bhani hamro router ma append gareko kura export hudaina