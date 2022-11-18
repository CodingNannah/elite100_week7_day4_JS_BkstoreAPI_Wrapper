import { clientNoAuth } from "./client.js";

const bookEndpoint = "/book";

const get = async (cancelToken) => {
  let error;
  let books;

  const response = await clientNoAuth(cancelToken).get(
    bookEndpoint
  ); 
  if (response.ok) {
    // what are the "categories" for the books? THAT goes in the .books part
    books = response.data.books;
  } else {
    error = "Kamino was erased from the Jedi archives. Try another.";
  }
  return {
    error,
    books
  };
};

const apiBook = {
    get,
}

export default apiBook