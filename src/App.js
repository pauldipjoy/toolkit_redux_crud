import { useState } from "react";
import "./App.css";
import BookFormCreate from "./components/BookFormCreate";
import BookList from "./components/BookList";

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null);
  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleRemoveEdit = (book) => {
    setBookToEdit(null);
  };

  return (
    <div className="App">
      <BookFormCreate bookToEdit={bookToEdit} handleRemove={handleRemoveEdit} />
      <BookList onHandleEdit={handleEdit} />
    </div>
  );
};

export default App;
