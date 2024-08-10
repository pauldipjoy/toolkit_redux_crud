import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/redux/slice/BookSlice";

const BookList = ({onHandleEdit}) => {
  const { books } = useSelector((state) => state.BookSlice);
  //console.log(books);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (book) => {
    onHandleEdit(book);
  };

  return (
    <div>
      <h2>List of Books</h2>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author} ${book.price} & {book.quantity} of
                pcs
                <button type="submit" onClick={() => handleEdit(book)}>
                  Edit Book
                </button>
                <button type="submit" onClick={() => handleDelete(book.id)}>
                  Delete Book
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no books exists</p>
      )}
    </div>
  );
};

export default BookList;
