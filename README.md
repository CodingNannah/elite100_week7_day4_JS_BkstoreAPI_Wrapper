Day 4 - Homework: JS Create API wrappers for Bookstore API

# Running the program
npm install apisauce
npm install base64

run tests with node index.js

NOTE: Can't access the API from the herokuapp location 
    Tried the copy at https://github.com/CrtlAltElite/BookStoreAPI/blob/main/README.md OR https://github.com/CrtlAltElite/BookStoreAPI
        
    BASE URL required for:
        obtaining endpoints
        logging in with admin to get the token
        details to run the index.js tests

# Homework Instructions
Build an ES6 module like we did in class today (see https://github.com/CrtlAltElite/day4-JS-Store-API-Wrappers) and utilize apisauce to create API wrappers for the 
https://cae-bootstore.herokuapp.com/  

Wrap the endpoints for:
GET /login
POST /user
PUT /user
DELETE /user
GET /book

Make a file that invokes all these API wrappers and logs their output to the console.