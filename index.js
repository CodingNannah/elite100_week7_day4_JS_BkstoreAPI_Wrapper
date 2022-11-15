import { getUser } from "./api/basicAuth.js"
import { CancelToken } from "apisauce"
import apiBook from "./api/item.js"

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
const token = "console.log()"

// Login Function w admin! - need this for the token!
const login = async (cancelToken) => {
    const { user, error } = await getUser('codingnannah@gmail.com', '123', cancelToken)
    // const { user, error } = await getUser('danannah.1@gmail.com', '1234', cancelToken)
    // const { user, error } = await getUser('kevinb@codingtemple.com', '1234', cancelToken)
    // const { user, error } = await getUser('please@gmail.com', '123', cancelToken)
    // const { user, error } = await getUser('ross@friends.com', '123', cancelToken)
    // const { user, error } = await getUser('cf@gmail.com', '1234', cancelToken)
    console.log(error ? error : "You are one with the force!")
    console.log(user ? user: "Commander Skywalker is missing!");
} 
// login(source.token)

// run with node index.js

// GET/DISPLAY A BOOK
const getBook = async (bookID, cancelToken) => {
    const { error, book } = await apiBook.get(bookID, cancelToken)
    console.log(error ? error : "You are one with the force!")
    console.log(book ? book: "That Jedi sacred text is missing!");
};
// getBook(2, source.token)


// REGISTER A New User = POST
const registerUser = async (cancelToken) => {
    const userData = {
      email: "lorgana@alderaan_senate.com",
      first_name: "Leia",
      last_name: "Organa",
      password: "AA-23-2187",
    };
    const { error } = await registerUser.post(userData, cancelToken);
    // error or success?
    console.log(error ? error : "You are one with the force!")
    console.log(user ? user: "Commander Skywalker is missing!");        
};
// registerUser(userData, source.token)


// EDIT USER
const editUser = async (cancelToken) => {
    const newData = {
      last_name: "Skywalker",
    };
    const { error } = await editUser.put(token, id, newData, cancelToken);
    // error or success?
    console.log(error ? error : "You are one with the force!")
    console.log(user ? user: "Commander Skywalker is missing!");
  };
// editUser(id, newData, source.token) <-- pass in specifics


  // DELETE USER
const deleteUser = async (cancelToken) => {
    const { error } = await deleteUser(token, id, cancelToken);
    console.log(error ? error : "This user has turned to the Dark Side.");
  };
// editUser(userData, id, source.token)  <-- pass in specifics
