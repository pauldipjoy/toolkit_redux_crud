import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createBook, updateBook } from "../features/redux/slice/BookSlice";

const BookFormCreate = ({ bookToEdit, handleRemove }) => {
  const [bookForm, setBookForm] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setBookForm(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setBookForm({ ...bookForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log({...bookForm, id: nanoid() });
    //dispatch(createBook({ ...bookForm, id: nanoid() }));

    if (bookToEdit) {
      // update dispatch
      dispatch(updateBook(bookForm))
    } else {
      dispatch(createBook({ ...bookForm, id: nanoid() }));
    }
    // reset book form
    setBookForm({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div>
      <h1>Book Form Data</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={bookForm.title}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={bookForm.author}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={bookForm.price}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={bookForm.quantity}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <button type="submit">{bookToEdit ? "Update Book" : "Add Book"}</button>
        {bookToEdit && <button onClick={handleRemove}>Remove</button>}
      </form>
    </div>
  );
};

export default BookFormCreate;
