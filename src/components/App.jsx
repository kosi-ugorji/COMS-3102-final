import React, { useState } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import initialNotes from "../Notes";

function App() {
  const [notes, setNotes] = useState(initialNotes); // Initialize a state with initialNotes as a variable
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function addNote(event) {
    event.preventDefault();
    const nextId = notes.length + 1;
    setNotes([...notes, { key: nextId, ...newNote }]);
    setNewNote({ title: "", content: "" }); // To remove text from input
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.key !== id));
  }

  function createNote(note) {
    return (
      <Note
        id={note.key}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={addNote}>
          <input
            name="title"
            placeholder="Title"
            value={newNote.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            value={newNote.content}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </div>
      <div>{notes.map(createNote)}</div>
      <Footer />
    </div>
  );
}

export default App;
