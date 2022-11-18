import { getUser } from "./api/basicAuth.js"
import { CancelToken } from "apisauce"
import apiBook from "./api/book.js"
import { registerUser, editUser, deleteUser } from "./api/user.js";

// TESTS:
// POSTS /user
// newUser(source.token);

// GET /login
// login(source.token);

// PUT /user
// updateUser(id, source.token);

// DELETE /user
// removeUser(id, source.token);

// GET /book
// book(source.token);

const source = CancelToken.source();
// source.token gets the actual token (returns the cancel token)
// const token = "ksZPjbuyyHHH8Z0hxXmpx0GkUi28crNDpFti92yCQgM"
const token ='k-QFU27tKrK7Rm7h-h3qY0vqqEEkPF8kuNs2oCDajAc'

// Login Function w admin! - need this for the token!
const login = async (cancelToken) => {
    const { user, error } = await getUser('lskywalker@tatooine.com', 'password', cancelToken)
    console.log(error ? error : "You are one with the force!")
    console.log(user ? user: "Commander Skywalker is missing!");
} 
// login(source.token)

// run with node index.js

// GET/DISPLAY A BOOK
const getBook = async (cancelToken) => {
    const { error, books } = await apiBook.get(cancelToken)
    console.log(error ? error : "You are one with the force!")
    console.log(books ? books: "That Jedi sacred text is missing!");
};
getBook(source.token)


// REGISTER A New User = POST
const register = async (userData, cancelToken) => {
  
    const { error } = await registerUser(userData, cancelToken);
    // error or success?
    console.log(error ? error : "You are one with the force!")     
};

const userData = {
  email: "lskywalker@tatooine.com",
  first_name: "Luke",
  last_name: "Skywalker",
  password: "1234",
};

// register(userData, source.token)


// EDIT USER
const edit = async (t, newData, cancelToken) => {
   
    const { error } = await editUser(t, newData, cancelToken);
    // error or success?
    console.log(error ? error : "You are one with the force!")
  };
  const newData = {
    password: "password",
  };

// edit(token, newData, source.token) //<-- pass in specifics


  // DELETE USER
const remove = async (t, cancelToken) => {
    const { error } = await deleteUser(t, cancelToken);
    console.log(error ? error : "This user has turned to the Dark Side.");
  };
// remove(token, source.token)  //<-- pass in specifics
