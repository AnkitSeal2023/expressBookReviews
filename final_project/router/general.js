const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  const bookList = Object.values(books);
  let formattedOutput = "";

  bookList.forEach(book => {
    formattedOutput += `{\n  "Title": "${book.title}",<br>  "Author": "${book.author}" <br> "Reviews": ${JSON.stringify(book.reviews)}\n},<br>`;
  });

  // Remove the trailing comma and HTML line breaks from the last book
  formattedOutput = formattedOutput.slice(0, -5);

  return res.status(300).send(`[<br>${formattedOutput}<br>]`);
});


// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;

  if (!isbn) {
    return res.status(400).json({ message: "ISBN is required" });
  }

  const book = Object.values(books).find(book => book.isbn === isbn);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.status(300).json({
    title: book.title,
    author: book.author,
    reviews: book.reviews
  });
});

  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
