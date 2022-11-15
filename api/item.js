import { clientNoAuth } from "./client.js";

const bookEndpoint = "/book";

const get = async (bookID, cancelToken) => {
  let error;
  let book;

  const response = await clientNoAuth(cancelToken).get(
    bookEndpoint + "/" + bookID
  ); 
  if (response.ok) {
    // what are the "categories" for the books? THAT goes in the .books part
    book = response.data.books;
  } else {
    error = "Kamino was erased from the Jedi archives. Try another.";
  }
  return {
    error,
    book,
  };
};

const apiBook = {
    get,
}

export default apiBook