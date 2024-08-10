import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "xx", author: "dipjoy", price: 123, quantity: 15 },
    { id: 2, title: "xy", author: "john", price: 235, quantity: 18 },
  ],
};
export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      console.log(id);

      state.books = state.books.filter((book) => {
        return book.id !== id;
      });
    },

    updateBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;

      const existingBook = state.books.find((book) => {
        return book.id === id;
      });
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },

    createBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { deleteBook,createBook, updateBook } = bookSlice.actions;
